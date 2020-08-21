import React from 'react';

import Logo from './Logo/Logo';
import Score from './Score/Score';


import './header.css'

const Header = () => {
    return (
        <div className='header'>
            <Logo />
            <Score />
        </div>
    )
}

export default Header;