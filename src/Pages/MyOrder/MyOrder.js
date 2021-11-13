import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyOrder = () => {
    const {user, isLoading} = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect( () => {
        fetch('https://sheltered-meadow-11966.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => {
            const matchedEmail = data.filter(singleData => singleData?.email === user?.email)
            setOrders(matchedEmail);
        });
    })

    const handleDelete = id => {
        const url = `https://sheltered-meadow-11966.herokuapp.com/orders/${id}`;
        fetch(url, {
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                alert("Are you sure you want to cancel your order?")
            }
        })
    }

    if(isLoading){
        return <Spinner className="spinner d-grid m-auto" animation="border" variant="danger" />
    }

    return (
        <div className="text-primary row m-0">
                <div className="col-lg-9 mx-auto">
                    <h4 className="text-center my-lg-4">Your Orders</h4>
                    <Table striped bordered hover responsive>
                        <thead className="table-secondary">
                            <tr>
                                <th>Name</th>
                                <th>Model</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order => <tr className="table-secondary" key={order._id}>
                                    <td>{order.name}</td>
                                    <td>{order.model}</td>
                                    <td>{order.email}</td>
                                    <td>{order.address}</td>
                                    <td>{order.price}</td>
                                    <td>{order.status}</td>
                                    <td><button onClick={() => handleDelete(order._id)} className="btn btn-sm btn-danger">Cancel Order</button></td>
                                </tr>)
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
    );
};

export default MyOrder;