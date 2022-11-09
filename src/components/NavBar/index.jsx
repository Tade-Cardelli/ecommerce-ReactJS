import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget'
import './style.css'
import { getAllCategories } from '../../utils/productServices';
import { useEffect,useState } from 'react';


const NavBar = () => {
    const [categories,setCategories] = useState()

    const fecthCategories = async () => {
        try {
            const data = await getAllCategories()
            setCategories(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fecthCategories()
    },[])
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
                {
                    categories && categories.map((category) =>{
                        return <li key={category}>
                        <Link to={`/category/${category}`}>{category}</Link>
                    </li>
                    })
                }
                <li>
                    <Link to="#about">About</Link>
                </li>
                <CartWidget/>
            </ul>
    );
};

export default NavBar;
