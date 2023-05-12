import React, {useEffect,useState} from 'react'
import axios from 'axios'
import Table from './Table';

const ProductList = () => {
    const [products, setProducts] = useState([])    
    
    useEffect(() =>{
        axios.get("http://localhost:8000/api/products")
        .then(res =>setProducts(res.data))
        .catch((err) => console.log(err))
    }, []);
return (
    <div className='container'>
        <div className='title'>
            <p className='mt-3 text-warning '><strong>Product List</strong></p>
        </div>
        <Table products={products}/>
    </div>
)
}

export default ProductList