import React from 'react';

import './index.scss'

import Menu from './components/Menu/Menu'
import Dapplets from "./components/Dapplets/Dapplets";
import Header from "./components/Header/Header";


function App() {

    return (
        <div className="App">
            <div className='menuWrap'>
                <Menu/>
            </div>
            <div className='dappletsWrap'>
                <Dapplets/>
            </div>
            <div className='headerWrap'>
                <Header/>
            </div>
        </div>
    )
}

export default App;
