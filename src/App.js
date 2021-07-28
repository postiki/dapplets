import React from 'react';

import './index.scss'

import Menu from './components/Menu/Menu'
import Dapplets from "./components/Dapplets/Dapplets";


function App() {

    return (
        <div className="App">
            <Menu />
            <Dapplets/>
        </div>
    )
}

export default App;
