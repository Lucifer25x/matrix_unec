import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import slugify from 'slugify'
import { removeProduct } from '../../tools/actions/productActions'

const Dashboard = () => {
    const data = useSelector(state => state).product;
    const dispatch = useDispatch();

    return (
        <div className="d-flex align-items-center justify-content-center flex-column">
            <p className="h1">Dashboard</p>
            <div className="col-12 col-sm-12 col-md-5">
                <Link className="btn btn-dark" to="/dashboard/add">Add Product </Link>
                <table className="table my-5">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, i) => (
                            <tr>
                                <th scope="row">{i + 1}</th>
                                <td><img src={item.img} width="70" alt={item.name} /></td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td><Link to={`/dashboard/edit/${slugify(item.name)}`} className="btn btn-warning">Edit</Link></td>
                                <td><button onClick={() => { dispatch(removeProduct(item.id)) }} className="btn btn-danger">X</button></td>

                            </tr>

                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dashboard