
import React from 'react';
import { Link } from 'react-router-dom';

const Table = ({ products, deletProrduct }) => {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th scope="col">Description</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {

                    products.map((product, i) => {
                        return (<tr key={i}>
                            <th scope="row">{i + 1}</th>
                            <td>{product.title}</td>
                            <td>$ {product.price}</td>
                            <td>{product.description}</td>
                            <td>
                                <Link to={`/${product._id}`} className="me-3"><i className="bi bi-binoculars"></i></Link>
                                <Link to={`/edit/${product._id}`} className="me-3"><i className="bi bi-pencil"></i></Link>
                                <Link onClick={() => deletProrduct(product._id)}><i className="bi bi-trash-fill"></i></Link>
                            </td>
                        </tr>)
                    }
                    )
                }
            </tbody>
        </table>
    )
}

export default Table