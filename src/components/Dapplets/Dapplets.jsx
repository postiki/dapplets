import React, {useEffect, useState} from 'react';
import axios from "axios";

import './index.scss'

import Item from "../Item/Item";

export default function Dapplets () {

    const [dataItems, setDataItems] = useState([]);
    const [showDataItems, setShowDataItems] = useState('');
    const [fetching, setFetching] = useState('true');

    const [startPage, setStartPages] = useState(0);
    const [limitPage, setLimitPages] = useState(10);

    const [inputValue, setInpitValue] = useState('')

    window.onload = () => {
        axios.get('https://dapplets-hiring-api.herokuapp.com/api/v1/dapplets?start=0&limit=10')
            .then((resp) => setDataItems(resp.data.data))
            .finally(() => setShowDataItems(true))
    }

    useEffect( () => {
        if (fetching) {
            axios.get('https://dapplets-hiring-api.herokuapp.com/api/v1/dapplets?start=' + `${startPage}` + '&limit=' + `${limitPage}`)
                .then((response) => {
                    setDataItems([...dataItems, ...response.data.data])
                })
                .then(() => setStartPages(prevState => prevState + 5))
                .finally(() => setFetching(false))
        }
    },[fetching] )

    useEffect(() => {
        document.addEventListener('scroll', scroll)
        return function () {
            document.removeEventListener('scroll', scroll)
        }
    }, [])

    let scroll = (e) => {
        if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setFetching(true)
        }
    }

    const fillterData = dataItems.filter(items => {
        return items.title.toLowerCase().includes(inputValue.toLowerCase())
    })

    return (
        <div className='dapplets'>
            <div className='header'>
                <input className='search' placeholder='Search' onChange={(e) => setInpitValue(e.target.value)}/>
                <button className='sortByFirst' />
                <button className='sortBySecond'/>
            </div>
            {showDataItems && <Item dataItems={fillterData}/>}
        </div>
    )
}