import React from 'react';

import './index.scss'

import Menu from './components/Menu/Menu'
import Dapplets from "./components/Dapplets/Dapplets";
import Header from "./components/Header/Header";
import RightMenu from './components/RightMenu/RightMenu'



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
            <div className='rightMenuWrap'>
                <RightMenu />
            </div>
        </div>
    )
}

export default App;
