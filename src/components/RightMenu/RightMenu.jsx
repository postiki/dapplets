import arrowLeft from "../../icons/arrow-left.svg";
import close from "../../icons/closeBtnTags.svg";

import './index.scss'

export  default function rightMenu () {
    return(
        <div className='rightMenu'>
            <div className='back'>
                <img src={arrowLeft}/>
            </div>
            <div className='dappletsettings'>
                <div className='settingtitle'>
                    <p><b>DAPPLET SETTINGS</b></p>
                </div>
                <div className='newlist'>
                    <p>Create new list</p>
                    <div className='inputlist'>
                        <input placeholder='List Name'/>
                        <button>Create</button>
                    </div>
                </div>
                <div className='newtag'>
                    <p>New tag</p>
                    <div className='inputtag'>
                        <input placeholder='Tag nameList Name'/>
                        <button>Create</button>
                    </div>
                </div>
            </div>
            <div className='myTags'>
                <div className='title'><p><b>MY TAGS</b></p></div>
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
                </div>
            </div>
            <div className='coTags'>
                <div className='title'><p><b>COMMUNITY TAGS</b></p></div>
                <div className='tags'>
                    <div className='label'>
                        <p>Social</p>
                        <img src={close}/>
                    </div>
                    <div className='label'>
                        <p>Top 100</p>
                        <img src={close}/>
                    </div>
                    <div className='label'>
                        <p>Testing</p>
                        <img src={close}/>
                    </div>
                    <div className='label'>
                        <p>Favourites</p>
                        <img src={close}/>
                    </div>
                </div>
            </div>
            <div className='workon'>
                <p><b>WORKING ON</b></p>
                <ul>
                    <li>twitter.com</li>
                    <li>twitter.com/randomusername</li>
                    <li>facebook.com</li>
                    <li>facebook.com/randomusername</li>
                </ul>
            </div>
        </div>
    )
}