import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget'
import './style.css'


const NavBar = () => {
    return (
            <ul>
                <li>
                    <h3 className='titulo'>Doggie Pet</h3>
                </li>

                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="#productos">Productos</Link>
                </li>
                <li>
                    <Link to="#about">About</Link>
                </li>
                <CartWidget/>
            </ul>
    );
};

export default NavBar;
