import React from 'react'
import { Link } from 'react-router-dom'

const Navigate = () => {
    return (
        <div className='mb-4'>
            <nav className="navbar navbar-expand-lg bg-body-secondary">
                <div className="container-fluid col-lg-8">
                    <Link to={"/"} className='navbar-brand'>Product Manager</Link>
                        <Link to={"/new"} className='btn btn-outline-success'>new Product</Link>
                    
                </div>
            </nav>
        </div>
    )
}

export default Navigate