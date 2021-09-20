import arrowLeft from "../../icons/arrow-left.svg";
import close from "../../icons/closeBtnTags.svg";

import './index.scss'

export  default function rightMenu () {
    return(
        <div className='rightMenu'>
            <div className='back'>
                <img alt='buttonNav' src={arrowLeft}/>
            </div>
            <div className='dappletsettings'>
                <div className='settingtitle'>
                    <h1><b>DAPPLET SETTINGS</b></h1>
                </div>
                <div className='newlist'>
                    <h2>Create new list</h2>
                    <div className='inputlist'>
                        <input placeholder='List Name'/>
                        <button>Create</button>
                    </div>
                </div>
                <div className='newtag'>
                    <h2>New tag</h2>
                    <div className='inputtag'>
                        <input placeholder='Tag nameList Name'/>
                        <button>Create</button>
                    </div>
                </div>
            </div>
            <div className='myTags'>
                <div className='title'><h1><b>MY TAGS</b></h1></div>
                <div className='tags'>
                    <div className='label'>
                        <h5>Twitter</h5>
                        <img alt='closeBtn' src={close}/>
                    </div>
                    <div className='label'>
                        <h5>SocialMedia</h5>
                        <img alt='closeBtn'  src={close}/>
                    </div>
                    <div className='label'>
                        <h5>Top 10</h5>
                        <img alt='closeBtn'  src={close}/>
                    </div>
                    <div className='label'>
                        <h5>Finances</h5>
                        <img alt='closeBtn'  src={close}/>
                    </div>
                </div>
            </div>
            <div className='coTags'>
                <div className='title'><h1><b>COMMUNITY TAGS</b></h1></div>
                <div className='tags'>
                    <div className='label'>
                        <h5>Social</h5>
                        <img alt='closeBtn'  src={close}/>
                    </div>
                    <div className='label'>
                        <h5>Top 100</h5>
                        <img alt='closeBtn'  src={close}/>
                    </div>
                    <div className='label'>
                        <h5>Testing</h5>
                        <img alt='closeBtn'  src={close}/>
                    </div>
                    <div className='label'>
                        <h5>Favourites</h5>
                        <img alt='closeBtn'  src={close}/>
                    </div>
                </div>
            </div>
            <div className='workon'>
                <h1><b>WORKING ON</b></h1>
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