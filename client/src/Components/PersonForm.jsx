import React, {useState} from 'react'
import axios from 'axios'


const PersonForm = () => {
    const[firstName,setFirstName] = useState("")
    const[lastName,setLastName] = useState("")

    const submitHandler =(e)=>{
      e.preventDefault()
      axios.post('http://localhost:8000/api/person', {
        firstName,
        lastName
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
        })
    .catch(err => console.log(err))
  }
  return (
    <div>
          <form onSubmit={submitHandler} action="">
            <div>
              <label>First Name</label>
              <input type="text" name='firstName' onChange={(e) => setFirstName(e.target.value)} className='form-group' placeholder='First name'/>
            </div>
            <div>
              <label>Last Name</label>
              <input type="text" name='lastName' onChange={(e) => setLastName(e.target.value)} className='form-group' placeholder='Last Name'/>
            </div>
            <input className='btn btn-success text-light' type="submit" value="Submit" />
          </form>
    </div>
  )
}

export default PersonForm