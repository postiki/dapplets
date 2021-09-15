import React, {useEffect, useState} from "react";

import btn from "../../icons/Group 14.svg";
import close from '../../icons/closeBtnTags.svg'
import buttonBlue from '../../icons/Property 1=Default.svg'
import buttonGray from '../../icons/InstalledButton.svg'

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
                        <h2 className='title'>{items.title}</h2>
                        <h4 className='address'>{items.address}</h4>
                    </div>
                    <h2 className='description'>{items.description}</h2>
                    <h3 className='author'>{items.author}</h3>
                    <div className='tags'>
                        {items.tags.map((props, index) => {
                            return (
                                <div className='label' key={index}>
                                    <h5>{tag.filter(o => o.id.includes(props))[0]?.name}</h5>
                                    <img src={close}/>
                                </div>
                            )
                        })}
                    </div>
                    <div className={localStorage.getItem(items.id) ? 'installed' : 'rollover'} onClick={() => saveStateBtn(items.id)}></div>
                    {/*<img className='button' src={localStorage.getItem(items.id) ? buttonGray : buttonBlue} onClick={() => saveStateBtn(items.id)}/>*/}
                </div>
            )
        })
    )
}