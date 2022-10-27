import React from 'react';
import CartWidget from '../CartWidget'
import './style.css'

const NavBar = () => {
    return (
            <ul>
                <li>
                    <h3 className='titulo'>Doggie Pet</h3>
                </li>

                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#productos">Productos</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <CartWidget/>
            </ul>
    );
};

export default NavBar;
