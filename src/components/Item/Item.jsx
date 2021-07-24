import React, {useState} from "react";


import btn from "../../icons/Group 14.svg";

import './index.scss'

export default function Item({dataItems}) {

    const [showInfo, setShowInfo] = useState(false)

    return (
        dataItems.map((items, index) => {
            return (
                <div className='item' key={index} onClick={() => setShowInfo(!showInfo)}>
                    <img className='drag-btn' alt='drag-btn' src={btn}/>
                    <img className='icon' alt='icons'
                         src={' https://dapplets-hiring-api.herokuapp.com/api/v1/files/' + items.icon}/>
                    <div className='info'>
                        <p className='title'>{items.title}</p>
                        <p className='address'>{items.address}</p>
                    </div>
                    <p className='description'>{items.description}</p>
                    <p className='author'>{items.author}</p>
                    <p className='tags'>{items.tags}</p>
                    <button>install</button>
                    {showInfo && <div className='moreInfo'>
                        <div className='a'>
                            <p className='text_1'>Aliquam sit</p>
                            <p></p>
                        </div>
                        <div className='b'>
                            <div className='text_2'>
                                <p>Semper neque</p>
                                <p></p>
                            </div>
                            <div className='text_3'>
                                <p>Leo ipsum.</p>
                                <p></p>
                            </div>
                            <div className='text_4'>
                                <p>Elit sagittis et.</p>
                                <p></p>
                            </div>
                        </div>
                        <div className='c'>
                            <div className='text_5'>
                                <p>Aliquam.</p>
                                <p></p>
                            </div>
                            <div className='text_6'>
                                <p>In euismod.</p>
                                <p></p>
                            </div>
                            <div className='text_7'>
                                <p>Justo amet.</p>
                                <p></p>
                            </div>
                        </div>
                        <div className='d'>
                            <div className='text_8'>
                                <p>Urna.</p>
                                <p></p>
                            </div>
                            <div className='text_9'>
                                <p>Nam diam.</p>
                                <p></p>
                            </div>
                        </div>
                    </div>}
                </div>
            )
        })
    )
}