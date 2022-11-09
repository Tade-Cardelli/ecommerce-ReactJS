import React, {useEffect, useState} from 'react';
import './style.css';
import '../../data/products'
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList'
import { getProducts } from '../../utils/productServices'; 

export default function ItemListContainer () {
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        try {
            const data = await getProducts()
            setProducts(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=> {
        fetchProducts()
    }, [])
    
    return(
        <div className='item-list-container'>
            <h2>Lista de productos</h2>
            <div>
                {
                    products.lenght === 0 ? <div>Cargando...</div> : <ItemList products={products}/>
                }
            </div>
        </div>
    )
}