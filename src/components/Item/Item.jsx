import React, {useEffect, useState} from "react";

import btn from "../../icons/Group 14.svg";
import close from '../../icons/closeBtnTags.svg'

import './index.scss'

export default function Item({dataItems}) {

    const [statementB, setStatementB] = useState('')

    const [currentItem, setCurrentItem] = useState(null)

    const [data, setData] = useState([])

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

    useEffect(() => {
        setData(dataItems)
    }, [dataItems])

    function dragStartHandler(e, items) {
        console.log(items, 'drag')
        setCurrentItem(items)
    }
    function dragEndHandler(e) {
        e.target.style.border = 'none'
    }
    function dragOverHandler(e) {
        e.preventDefault()
        e.target.style.border = '1px solid red'
    }
    function dropHandler(e, items) {
        e.preventDefault()
        console.log(items, 'drop')
        setCurrentItem(data.map(i => {
            if (i.id === items.id) {
                return {...i, order: currentItem.order}
            }
            if (i.id === currentItem.id) {
                return {...i, order: items.order}
            }
            return i
        }))
        e.target.style.border = 'none'
    }

    let sortItem = (a, b) => {
        if (a.order > b.order) {
            return 1
        } else {
            return -1
        }
    }

    return (
        data.sort(sortItem).map((items, index) => {
            return (
                <div
                    onDragStart={(e) => dragStartHandler(e, items)}
                    onDragEnd={(e) => dragEndHandler(e)}
                    onDragLeave={(e) => dragEndHandler(e)}
                    onDragOver={(e) => dragOverHandler(e)}
                    onDrop={(e) => dropHandler(e, items)}
                    draggable={true}
                    className='item' key={index} >
                    <img className='drag-btn' alt='drag-btn' src={btn} />
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
                </div>
            )
        })
    )
}