import React, { useEffect, useState } from 'react';
import { Table, Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const AllCars = () => {
    const [allCars, setAllCars] = useState([]);

    useEffect( () => {
        fetch('https://sheltered-meadow-11966.herokuapp.com/cars')
        .then(res => res.json())
        .then(data => setAllCars(data));
    })

    const handleDelete = id => {
        const url = `https://sheltered-meadow-11966.herokuapp.com/cars/${id}`;
        fetch(url, {
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                alert("Are you sure you want to remove this item?");
            }
        })
    }

    const {isLoading} = useAuth();
    if(isLoading){
        return <Spinner className="spinner d-grid m-auto" animation="border" variant="danger" />
    }

    return (
        <div>
            <div className="text-danger row m-0">
                <div className="col-lg-7 mx-auto">
                    <h2 className="text-center my-lg-4">Manage All Cars</h2>
                    <Table striped bordered hover responsive>
                        <thead className="table-secondary">
                            <tr>
                                <th className="text-start">Model</th>
                                <th>Price</th>
                                <th>Condition</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allCars.map(cars => <tr className="table-secondary" key={cars._id}>
                                    <td className="text-start">{cars.name}</td>
                                    <td>{cars.price}</td>
                                    <td className="text-start">{cars.condition}</td>
                                    <td className="text-center"><button onClick={() => handleDelete(cars._id)} className="btn btn-sm btn-danger me-2 mb-2 mb-md-0">Cancel Cars</button></td>
                                </tr>)
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default AllCars;