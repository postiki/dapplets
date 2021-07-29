import React, {useEffect, useState} from "react";

import btn from "../../icons/Group 14.svg";
import close from '../../icons/closeBtnTags.svg'

import './index.scss'

export default function Item({dataItems}) {

    const [showInfo, setShowInfo] = useState(false)
    const [statementB, setStatementB] = useState('')

    let tag = [
        {
            "id": "0",
            "name": "Games"
        },
        {
            "id": "1",
            "name": "Twitter"
        },
        {
            "id": "2",
            "name": "Social Media"
        },
        {
            "id": "3",
            "name": "Top 10"
        },
        {
            "id": "4",
            "name": "Finances"
        },
        {
            "id": "5",
            "name": "Media"
        },
        {
            "id": "6",
            "name": "Test"
        },
        {
            "id": "7",
            "name": "ToDo"
        }]

    let saveStateBtn = (props) => {

        if (statementB.includes(props)) {
            localStorage.removeItem(props)
            setStatementB('')
        } else {
            setStatementB(props)
            localStorage.setItem(props, 'install')
        }
    }



    return (
        dataItems.map((items, index) => {
            return (
                <div className='item' key={index} >
                    <img className='drag-btn' alt='drag-btn' src={btn}/>
                    <img className='icon' alt='icons'
                         src={' https://dapplets-hiring-api.herokuapp.com/api/v1/files/' + items.icon}/>
                    <div className='info'>
                        <p className='title'>{items.title}</p>
                        <p className='address'>{items.address}</p>
                    </div>
                    <p className='description'>{items.description}</p>
                    <p className='author'>{items.author}</p>
                    <p className='tags'>
                        {items.tags.map((props, index) => {
                            return (
                                <div className='label' key={index}>
                                    <p>{tag.filter(o => o.id.includes(props))[0]?.name}</p>
                                    <img src={close}/>
                                </div>
                            )
                        })}
                    </p>
                    <button className={localStorage.getItem(items.id)} onClick={() => saveStateBtn(items.id)}><p>INSTALL</p></button>
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