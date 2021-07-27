import React, {useEffect, useState} from 'react';
import useDebounce from './use-debounced';

import axios from "axios";

import './index.scss'

import Item from "../Item/Item";


export default function Dapplets() {

    const [dataItems, setDataItems] = useState([]);
    const [showDataItems, setShowDataItems] = useState('');
    const [fetching, setFetching] = useState('true');

    const [startPage, setStartPages] = useState(0);
    const [limitPage, setLimitPages] = useState(10);

    const [inputValue, setInputValue] = useState('')

    const [sortByType, setSortByType] = useState('')
    const [sortTo, setSortTo] = useState('')

    const [results, setResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    const debouncedSearchTerm = useDebounce(inputValue, 500);


    window.onload = () => {
        axios.get('https://dapplets-hiring-api.herokuapp.com/api/v1/dapplets?start=0&limit=10')
            .then((resp) => setDataItems(resp.data.data))
            .finally(() => setShowDataItems(true))
    }

    useEffect(() => {
        if (fetching) {
            axios.get('https://dapplets-hiring-api.herokuapp.com/api/v1/dapplets?start=' + `${startPage}` + '&limit=' + `${limitPage}`)
                .then((response) => {
                    setDataItems([...dataItems, ...response.data.data])
                })
                .then(() => setStartPages(prevState => prevState + 5))
                .finally(() => setFetching(false))
        }
    }, [fetching])

    useEffect(() => {
        document.addEventListener('scroll', scroll)
        return function () {
            document.removeEventListener('scroll', scroll)
        }
    }, [])

    let scroll = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setFetching(true)
        }
    }


    useEffect(
        () => {
            if (debouncedSearchTerm) {
                setIsSearching(true);
                searchCharacters(debouncedSearchTerm).then(data => {
                    setIsSearching(false);
                    setResults(data)
                });
            } else {
                setResults([]);
            }
        },
        [debouncedSearchTerm]
    );


    function searchCharacters(search) {
        return (
            axios.get('https://dapplets-hiring-api.herokuapp.com/api/v1/dapplets?start=0&limit=15&filter=[{"property":"title","value":"' + `${search}` + '"}]')
                .then((response) => response.data.data)
                .then(data => data.filter(item => item.title.toLowerCase().includes(inputValue.toLowerCase())))
        )
    }


    return (
        <div className='dapplets'>
            <div className='header'>
                <input className='search' placeholder='Search' onChange={(e) => setInputValue(e.target.value)}/>
                <select className='sortByFirst' onChange={(e) => setSortByType(e.target.value)}>
                    <option value='released'>Released Date</option>
                    <option value='rating'>Rating</option>
                    <option value='downloads'>Downloads</option>
                </select>
                <select className='sortBySecond'>
                    <option value='DESC'>Descending</option>
                    <option value='ASC'>Ascending</option>
                </select>
            </div>
            {isSearching && <div>Searching ...</div>}
            {showDataItems && <Item dataItems={results.length >= 1 ? results : dataItems}/>}
        </div>
    )
}