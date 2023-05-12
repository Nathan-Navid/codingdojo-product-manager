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
    <div className='container text-center'>
    <div className='row justify-content-md-center p-md-3'>
      <h1 className='mb-3'>Product Manager</h1>
      <form onSubmit={submitHandler} action="" className='col-sm-6'>
        <div class="row mb-3">
          <label className='col-sm-2 col-form-label'>Title: </label>
          <div className='col-sm-10'>
            <input type="text" name='title' onChange={(e) => setTitle(e.target.value)} className='form-control' placeholder='Title' />
          </div>
        </div>
        <div class="row mb-3">
          <label className='col-sm-2 col-form-label'>Price: </label>
          <div className='col-sm-10'>
            <input type="text" name='price' onChange={(e) => setPrice(e.target.value)} className='form-control' placeholder='Price' />
          </div>
        </div>
        <div class="row mb-3">
          <label className='col-sm-2 col-form-label'>Description: </label>
          <div className='col-sm-10'>
            <input type="text" name='description' onChange={(e) => setDescription(e.target.value)} className='form-control' placeholder='Description' />
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Sign in</button>
      </form>
    </div>
    </div>
  )
}

export default ProductForm