import './index.scss'

import Menu from './components/Menu/Menu'
import Dapplets from "./components/Dapplets/Dapplets";
import Header from "./components/Header/Header";
import RightMenu from './components/RightMenu/RightMenu'
import {useState} from "react";

function App() {

    const [showMenu, setShowMenu] = useState(false)

    let test = (props) => {
        setShowMenu(props)
    }

    return (
        <div className="App">
            <div className={showMenu ? 'menuWrap' : 'menuWrapActive'}>
                <Menu test={test}/>
            </div>
            <div className='dappletsWrap' id='100'>
                <Dapplets />
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
