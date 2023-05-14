import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const ProductForm = () => {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
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
        {/* <form onSubmit={submitHandler} action="" className='col-sm-6 needs-validation novalidate'> */}
          {/* <div class="col-md-4">
            <label for="validationCustom01" class="form-label">First name</label>
            <input type="text" class="form-control" id="validationCustom01" value="Mark" required/>
              <div class="valid-feedback">
                Looks good!
              </div>
          </div> */}
          {/* <div class="col-md-4">
            <label for="validationCustomUsername" class="form-label">Username</label>
            <div class="input-group has-validation">
              <span class="input-group-text" id="inputGroupPrepend"></span>
              <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
                <div class="invalid-feedback">
                  Please choose a username.
                </div>
            </div>
          </div> */}
          <div className="row mb-3">
            <label className='col-sm-2 col-form-label'>Title: </label>
            <div className='col-sm-10 '>
              <input type="text" name='title' onChange={(e) => setTitle(e.target.value)} className='form-control' placeholder='Title' required />
            {title && title.length < 2 ? <div className='text-danger'>*** Title must be at least 2 charactors *** </div>: ""},
            {title.length > 2 ? <div className='text-success'> Looks Good</div> : ""}
            </div>
          </div>
          <div className="row mb-3">
            <label className='col-sm-2 col-form-label'>Price: </label>
            <div className='col-sm-10'>
              {/* {price <2 ? <div className='text-danger'>*** Please set a price for the product ***</div> : ""} */}
              <input type="number" name='price' onChange={(e) => setPrice(e.target.value)} className='form-control' placeholder='Price' />
            </div>
          </div>
          <div className="row mb-3">
            <label className='col-sm-2 col-form-label'>Description: </label>
            <div className='col-sm-10'>
              {description && description.length < 5 ? <p className='text-danger'>*** Description must be at least 5 charactors ***</p> : ""}
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