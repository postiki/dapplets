import logo from "../../icons/Logo.svg";
import back from "../../icons/arrow-right.svg";
import codesandbox from "../../icons/codesandbox.svg";
import heart from "../../icons/Vector.svg";
import grid from "../../icons/grid.svg";
import social from "../../icons/users.svg";
import trend from "../../icons/trending-up.svg";
import close from "../../icons/closeBtnTags.svg";

import './index.scss'


export default function menu () {
    return (
        <div className='menu'>
            <div className='logo'>
                <div className='logoTitle'>
                    <img src={logo}/>
                    <p>Dapplets Project.</p>
                </div>
                <img src={back}/>
            </div>
            <div className='sideIcons'>
                <div className='active'>
                    <img src={codesandbox}/>
                    <p>All Dapplets</p>
                </div>
                <div>
                    <img src={heart}/>
                    <p>Editor’s Choice</p>
                </div>
                <div>
                    <img src={grid}/>
                    <p>Essential Dapplets</p>
                </div>
                <div>
                    <img src={social}/>
                    <p>Social Networks</p>
                </div>
                <div>
                    <img src={trend}/>
                    <p>Financial Dapplets</p>
                </div>
            </div>
            <div className='myLists'>
                <p><b>My lists</b></p>
                <p>TOP-10 Twitter Dapplets (Me)</p>
                <p>Best Financial dapplets by Jack (Jack)</p>
                <p>TOP-10 Twitter Dapplets (Me)</p>
            </div>
            <div className='myTags'>
                <div className='title'><p><b>My tags</b></p></div>
                <div className='tags'>
                    <div className='label'>
                        <p>Twitter</p>
                        <img src={close}/>
                    </div>
                    <div className='label'>
                        <p>SocialMedia</p>
                        <img src={close}/>
                    </div>
                    <div className='label'>
                        <p>Top 10</p>
                        <img src={close}/>
                    </div>
                    <div className='label'>
                        <p>Finances</p>
                        <img src={close}/>
                    </div>
                    <div className='label'>
                        <p>Media</p>
                        <img src={close}/>
                    </div>
                    <div className='label'>
                        <p>Test</p>
                        <img src={close}/>
                    </div>
                    <div className='label'>
                        <p>ToDo</p>
                        <img src={close}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
