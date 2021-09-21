import React, {useEffect, useState} from 'react';
import useDebounce from './use-debounced';
import axios from "axios";
import './index.scss'
import Item from "../Item/Item";
import {LinearProgress} from "@mui/material";

export default function Dapplets() {

    const [dataItems, setDataItems] = useState([]);
    const [showDataItems, setShowDataItems] = useState(false);
    const [fetching, setFetching] = useState(false);

    const [startPage, setStartPage] = useState(0);
    const limitPage = 15;

    const [inputValue, setInputValue] = useState('')

    const [sortByType, setSortByType] = useState('released')
    const [sortTo, setSortTo] = useState('DESC')

    const [results, setResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    const [showProgress, setShowProgress] = useState(false);

    const debouncedSearchTerm = useDebounce(inputValue, 500);

        useEffect(() => {
            axios.get(`https://dapplets-hiring-api.herokuapp.com/api/v1/dapplets?start=${startPage}&limit=${limitPage}&sort=[{"property": "${sortByType}", "direction": "${sortTo}"}]`)
                // .then(response => setDataItems(response.data.data.map((i, index) => ({...i, id: index}))))
                .then(r => setDataItems(r.data.data.map((i, index) => ({...i, id: index}))))
                .catch(error => console.log(error))
                .finally(() => {
                    setStartPage(prevState => prevState + 15)
                    setShowDataItems(true)
                })
        }, [])

        useEffect(() => {
            console.log(startPage, 'start page')
        }, [startPage])

        useEffect(() => {
            console.log(dataItems.length, 'items')
        }, [dataItems])

        useEffect(() => {
            if (sortByType) {
                axios.get(`https://dapplets-hiring-api.herokuapp.com/api/v1/dapplets?start=${startPage}&limit=${limitPage}&sort=[{"property": "${sortByType}", "direction": "${sortTo}"}]`)
                    // .then(response => setDataItems(response.data.data))
                    .then(r => setDataItems(r.data.data.map((i, index) => ({...i, id: index}))))
                    .catch(error => console.log(error))
                    .finally(() => {
                        if (startPage === 15) {
                            setStartPage(prevState => prevState + 15)
                        }
                        if(dataItems.length > 0) {
                            setStartPage(prevState => prevState + 15)
                        }
                    })
            }
        }, [sortByType])

        useEffect(() => {
            if (sortTo) {
                axios.get(`https://dapplets-hiring-api.herokuapp.com/api/v1/dapplets?start=${startPage}&limit=${limitPage}&sort=[{"property": "${sortByType}", "direction": "${sortTo}"}]`)
                    // .then(response => setDataItems(response.data.data))
                    .then(r => setDataItems(r.data.data.map((i, index) => ({...i, id: index}))))
                    .catch(error => console.log(error))
                    .finally(() => {
                        if (startPage === 15) {
                            setStartPage(prevState => prevState + 15)
                        }
                        if(dataItems.length > 0) {
                            setStartPage(prevState => prevState + 15)
                        }
                    })
            }
        }, [sortTo])


        useEffect(() => {
            document.getElementById('100').addEventListener('scroll', scroll)
            return function () {
                document.removeEventListener('scroll', scroll)
            }
        }, [])

        let scroll = () => {
            let scrollWindow = document.getElementById('100')
            if (scrollWindow.scrollHeight - (scrollWindow.scrollTop + scrollWindow.clientHeight) < 100) {
                setFetching(true)
            }
        }

        useEffect(() => {
            if (fetching) {
                setShowProgress(true)
                axios.get(`https://dapplets-hiring-api.herokuapp.com/api/v1/dapplets?start=${startPage}&limit=${limitPage}&sort=[{"property": "${sortByType}", "direction": "${sortTo}"}]`)
                    .then((response) => {
                        setDataItems([...dataItems, ...response.data.data])
                    })
                    .catch(error => console.log(error))
                    .finally(() => {
                        setStartPage(prevState => prevState + 15)
                        setFetching(false)

                    })
            }
        }, [fetching])

        useEffect(() => {
            if (debouncedSearchTerm) {
                console.log(startPage, 'effect on debounced')
                setIsSearching(true);
                search(debouncedSearchTerm).then(data => {
                    setIsSearching(false);
                    setResults(data)
                });
            } else {
                setResults([]);
            }
        }, [debouncedSearchTerm]);

        function search() {
            return (
                axios.get(`https://dapplets-hiring-api.herokuapp.com/api/v1/dapplets?start=0&limit=15&filter=[{"property":"title","value":"${inputValue}"}]`)
                    .then(response => response.data.data.filter(item => item.title.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0)) //last filtration on frontend
                    .catch(error => console.log(error))
            )
        }

    return (
        <div className='dapplets'>
            <div className='header'>
                <input className='search' placeholder='Search' onChange={(e) => setInputValue(e.target.value)}/>
                <select className='sortByFirst' onChange={(e) => setSortByType(e.target.value)} onClick={() => setStartPage(0)}>
                    <option value='released'>Released Date</option>
                    <option value='rating'>Rating</option>
                    <option value='downloads'>Downloads</option>
                </select>
                <select className='sortBySecond' onChange={(e) => setSortTo(e.target.value)} onClick={() => setStartPage(0)}>
                    <option value='DESC'>Descending</option>
                    <option value='ASC'>Ascending</option>
                </select>
            </div>
            {isSearching && <div>Searching ...</div>}
            <div className='items'>
                {showDataItems && <Item dataItems={results.length >= 1 ? results : dataItems}/>}
            </div>
            {showProgress && <LinearProgress/>}
        </div>
    )
}