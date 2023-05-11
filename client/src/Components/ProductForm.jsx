import React, { useState } from 'react'
import axios from 'axios'


const ProductForm = () => {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState()
  const [description, setDescription] = useState("")





  const submitHandler = (e) => {
    e.preventDefault()

    axios.post('http://localhost:8000/api/product', {
      title,
      price,
      description
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(err => console.log(err))

  }
  return (
    <div>
      <h1>Product Manager</h1>
      <form onSubmit={submitHandler} action="">
        <div>
          <label>Title</label>
          <input type="text" name='title' onChange={(e) => setTitle(e.target.value)} className='form-group mt-2' placeholder='Title' />
        </div>
        <div>
          <label>Price</label>
          <input type="number" name='price' onChange={(e) => setPrice(e.target.value)} className='form-group mt-2' placeholder='Price' />
        </div>
        <div>
          <label>Description</label>
          <input type="text" name='description' onChange={(e) => setDescription(e.target.value)} className='form-group' placeholder='Description' />
        </div>
        <input className='btn btn-primary text-light mt-2' type="submit" value="Creat" />
      </form>
    </div>
  )
}

export default ProductForm