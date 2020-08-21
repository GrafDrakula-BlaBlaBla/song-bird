import React from 'react';


import './menu.css'


const items = ['Разминка', 'Воробъиные', 'Лесные птицы'];

const Menu = () => {
    const listItems = items.map((value) => {
        return (
            <li className='menuItems' key={value}>
                {value}
            </li>
        )
    })


    return (
        <ul className='menu'>
            {listItems}
        </ul>
    )
}

export default Menu;
