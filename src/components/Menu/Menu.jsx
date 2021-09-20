import logo from "../../icons/Logo.svg";
import codesandbox from "../../icons/codesandbox.svg";
import heart from "../../icons/Vector.svg";
import grid from "../../icons/grid.svg";
import social from "../../icons/users.svg";
import trend from "../../icons/trending-up.svg";
import close from "../../icons/closeBtnTags.svg";

import './index.scss'
import React, {useEffect, useState} from "react";

export default function Menu ({test}) {

    const [showMenu, setShowMenu] = useState(false)

    useEffect(() => {
        test(!showMenu)
    }, [showMenu])

    return (
        <div className='menu'>
            <div className='logo'>
                <div className='logoTitle'>
                    <img alt='logo'  src={logo}/>
                    <h2>Dapplets Project.</h2>
                </div>
                <div className='menuIcon' onClick={() => setShowMenu(!showMenu)}>
                    {/*<img src={back}/>*/}
                </div>
            </div>
            <div className={showMenu ? 'sideIconsActive' : 'sideIcons'}>
                <div className='active'>
                    <img alt='codesandbox'  src={codesandbox}/>
                    <h2>All Dapplets</h2>
                </div>
                <div>
                    <img alt='heart'  src={heart}/>
                    <h2>Editor’s Choice</h2>
                </div>
                <div>
                    <img alt='grid'  src={grid}/>
                    <h2>Essential Dapplets</h2>
                </div>
                <div>
                    <img alt='social' src={social}/>
                    <h2>Social Networks</h2>
                </div>
                <div>
                    <img alt='trend' src={trend}/>
                    <h2>Financial Dapplets</h2>
                </div>
            </div>
            <div className='myLists'>
                <h2><b>My lists</b></h2>
                <h2>TOP-10 Twitter Dapplets (Me)</h2>
                <h2>Best Financial dapplets by Jack (Jack)</h2>
                <h2>TOP-10 Twitter Dapplets (Me)</h2>
            </div>
            <div className='myTags'>
                <div className='title'><h2><b>My tags</b></h2></div>
                <div className='tags'>
                    <div className='label'>
                        <h5>Twitter</h5>
                        <img alt='closeBtn' src={close}/>
                    </div>
                    <div className='label'>
                        <h5>SocialMedia</h5>
                        <img alt='closeBtn' src={close}/>
                    </div>
                    <div className='label'>
                        <h5>Top 10</h5>
                        <img alt='closeBtn' src={close}/>
                    </div>
                    <div className='label'>
                        <h5>Finances</h5>
                        <img alt='closeBtn' src={close}/>
                    </div>
                    <div className='label'>
                        <h5>Media</h5>
                        <img alt='closeBtn' src={close}/>
                    </div>
                    <div className='label'>
                        <h5>Test</h5>
                        <img alt='closeBtn' src={close}/>
                    </div>
                    <div className='label'>
                        <h5>ToDo</h5>
                        <img alt='closeBtn' src={close}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
