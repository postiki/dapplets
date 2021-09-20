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

    const [startPage, setStartPages] = useState(0);
    const limitPage = 15;

    const [inputValue, setInputValue] = useState('')

    const [sortByType, setSortByType] = useState('released')
    const [sortTo, setSortTo] = useState('DESC')

    const [results, setResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    const [progress, setProgress] = useState(0);
    const [showProgress, setShowProgress] = useState(false);

    const debouncedSearchTerm = useDebounce(inputValue, 500);

    useEffect(() => {
        axios.get(`https://dapplets-hiring-api.herokuapp.com/api/v1/dapplets?start=${startPage}&limit=${limitPage}&sort=[{"property": "${sortByType}", "direction": "${sortTo}"}]`)
            .then(response => setDataItems(response.data.data))
            .catch(error => console.log(error))
            .finally(() => setShowDataItems(true))
    }, [sortByType, sortTo])

    useEffect(() => {
        document.getElementById('100').addEventListener('scroll', scroll)
        return function () {
            document.removeEventListener('scroll', scroll)
        }
    }, [])

    let scroll = () => {
        let scrollWindow = document.getElementById('100')
        console.log(scrollWindow.scrollHeight - (scrollWindow.scrollTop + scrollWindow.clientHeight))

        if (scrollWindow.scrollHeight - (scrollWindow.scrollTop + scrollWindow.clientHeight) < 100) {
            setFetching(true)
        }
    }

    useEffect(() => {
        if (fetching) {
            setShowProgress(true)
            axios.get(`https://dapplets-hiring-api.herokuapp.com/api/v1/dapplets?start=${startPage}&limit=${limitPage}&sort=[{"property": "${sortByType}", "direction": "${sortTo}"}]`, {
                onDownloadProgress: progressEvent => {
                    const percentage = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    console.log(percentage)
                    setProgress(percentage)
                    setShowProgress(false)
                }
            })
                .then((response) => setDataItems([...dataItems, ...response.data.data]))
                .catch(error => console.log(error))
                .then(() => setStartPages(prevState => prevState + 5))
                .finally(() => setFetching(false))
        }
    }, [fetching])

    useEffect(() => {
        if (debouncedSearchTerm) {
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
                <select className='sortByFirst' onChange={(e) => setSortByType(e.target.value)}>
                    <option value='released'>Released Date</option>
                    <option value='rating'>Rating</option>
                    <option value='downloads'>Downloads</option>
                </select>
                <select className='sortBySecond' onChange={(e) => setSortTo(e.target.value)}>
                    <option value='DESC'>Descending</option>
                    <option value='ASC'>Ascending</option>
                </select>
            </div>
            {isSearching && <div>Searching ...</div>}
            <div className='items'>
                {showDataItems && <Item dataItems={results.length >= 1 ? results : dataItems}/>}
            </div>
            {showProgress && <LinearProgress variant="determinate" value={progress} />}
        </div>
    )
}