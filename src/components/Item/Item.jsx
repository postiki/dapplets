import React from "react";

import btn from "../../icons/Group 14.svg";

import './index.scss'

export default function Item({dataItems}) {

    return (
        dataItems.map((items, index) => {
            return (
                <div className='item' key={index}>
                    <img className='drag-btn' alt='drag-btn' src={btn}/>
                    <img className='icon' alt='icons'
                         src={' https://dapplets-hiring-api.herokuapp.com/api/v1/files/' + items.icon}/>
                    <div className='info'>
                        <p className='title'>{items.title}</p>
                        <p className='address'>{items.address}</p>
                    </div>
                    <p className='description'>{items.description}</p>
                    <p className='author'>{items.author}</p>
                    <p className='tags'>{items.tag}</p>
                </div>
            )
        })
    )
}