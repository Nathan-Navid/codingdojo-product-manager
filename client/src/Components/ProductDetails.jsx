import React from 'react'
import { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import axios from 'axios';
// /:id 
// get id from params
//getiing product details based on the value of the Id, from api
// 
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({})


  useEffect(() => {
    axios.get(`http://localhost:8000/api/product/${id}`)
      .then(res => setProduct(res.data))
      .catch((err) => console.log(err))
  }, [id]);

  return (
    <div>
      <h3>Title: {product.title}</h3>
      <h3>Price: {product.price}</h3>
      <h3>Description: {product.description}</h3>
      <Link to={"/"} className="btn btn-success">Back to Product List</Link>
    </div>
  )
}

export default ProductDetails