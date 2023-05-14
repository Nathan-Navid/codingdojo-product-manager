import React, {useEffect,useState} from 'react'
import axios from 'axios'
import Table from './Table';

const ProductList = () => {
    const [products, setProducts] = useState([]) 
    // const [id, setProductId] = useState() 
    
    useEffect(() =>{
        axios.get("http://localhost:8000/api/products")
        .then(res =>setProducts(res.data))
        .catch((err) => console.log(err))
    }, []);

    //Delete Product code to 2 ways:

    const deletProrduct = id => {        
        console.log(id)
        axios.delete(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                console.log(res)
                // setProductId(id);
                setProducts(products.filter(product=> product._id !== id));
            })
            .catch((err) => console.log(err))
    }
    // const deletProrduct = id => {
    //     axios.delete("http://localhost:8000/api/product/" + id)
    //     .then((res)=>{
    //         console.log(res);
    //         console.log(res.data);
    //         setProductId(products.filter(product=> product._id !== id));
    //     })
    //     .catch((err)=>console.log(err))
    // }
return (
    <div className='container'>
        <div className='title'>
            <p className='mt-3 text-warning '><strong>Product List</strong></p>
        </div>
        <Table products={products} deletProrduct={deletProrduct}/>
    </div>
)
}

export default ProductList