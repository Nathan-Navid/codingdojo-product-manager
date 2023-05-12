import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const ProductForm = () => {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState()
  const [description, setDescription] = useState("")
  const navigate = useNavigate();
  

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
        navigate("/")
      })
      .catch(err => console.log(err))

  }
  return (
    <div className='container text-center'>
    <div className='row justify-content-md-center p-md-3'>
      <h1 className='mb-3'>Product Manager</h1>
      <form onSubmit={submitHandler} action="" className='col-sm-6'>
        <div className="row mb-3">
          <label className='col-sm-2 col-form-label'>Title: </label>
          <div className='col-sm-10'>
            <input type="text" name='title' onChange={(e) => setTitle(e.target.value)} className='form-control' placeholder='Title' />
          </div>
        </div>
        <div className="row mb-3">
          <label className='col-sm-2 col-form-label'>Price: </label>
          <div className='col-sm-10'>
            <input type="number" name='price' onChange={(e) => setPrice(e.target.value)} className='form-control' placeholder='Price' />
          </div>
        </div>
        <div className="row mb-3">
          <label className='col-sm-2 col-form-label'>Description: </label>
          <div className='col-sm-10'>
            <input type="text" name='description' onChange={(e) => setDescription(e.target.value)} className='form-control' placeholder='Description' />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Create</button>
      </form>
    </div>
    </div>
  )
}

export default ProductForm