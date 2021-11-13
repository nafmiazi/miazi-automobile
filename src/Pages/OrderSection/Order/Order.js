import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';

const Order = () => {
    const {user} = useAuth();
    const {id} = useParams();
    const [order, setOrder] = useState({});

    useEffect( () => {
        fetch(`https://sheltered-meadow-11966.herokuapp.com/cars/${id}`)
        .then(res => res.json())
        .then(data => setOrder(data));
    }, [])

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.status = "Pending";
        axios.post('https://sheltered-meadow-11966.herokuapp.com/orders', data)
          .then(res => {
            if(res.data.insertedId){
                window.confirm("Your Order is Confirmed");
                reset();
            }
          })
    };

    return (
        <div className="row p-3 p-md-5 m-0">
            <div className="col-lg-6 text-black p-3 p-md-4 mt-5 bg-light rounded">
                <div className="text-center">
                    <img className="destination-img" src={order.img} width="100%" height="500px" alt="" />
                </div>
                <div className="">
                    <h2 className="text-warning pt-lg-3">{order.name}</h2>
                    <p className="text-black pt-lg-3">{order.description}</p>
                </div>
            </div>

            <div className="col-lg-6 mt-5 bg-primary rounded text-center">
                    <div className="mt-lg-5 py-5 py-md-0">
                        <h3 className="mt-lg-5 text-black">Please Add Few Informations</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("name", { required: true })} value={user?.displayName || ''} className="w-75 mt-4 rounded border-0" readOnly/> <br />
                            <input {...register("email", { required: true })} value={user?.email || ''} className="w-75 mt-4 rounded border-0" readOnly/> <br />
                            <input {...register("model", { required: true })} value={order?.name || ''} className="w-75 mt-4 rounded border-0" readOnly/> <br />
                            <input {...register("price", { required: true })} value={order?.price || ''} className="w-75 mt-4 rounded border-0" readOnly/> <br />
                            <input {...register("condition", { required: true })} value={order?.condition || ''} className="w-75 mt-4 rounded border-0" readOnly/> <br />
                            <input type="number" {...register("age", { min: 18, max: 99 })} className="w-75 mt-4 rounded border-0" placeholder="Your Age"/> <br />
                            <textarea {...register("address", { required: true, maxLength: 40 })} placeholder="Your Address"  className="w-75 mt-4 rounded border-0"/> <br />
                            <input {...register("phone", { required: true })} placeholder="Your Phone Number"  className="w-75 mt-4 rounded border-0"/> <br />
                            <input className="btn btn-warning mt-4 w-75" type="submit" value="Confirm Order"/>
                        </form>
                    </div>
                </div>
        </div>
    );
};

export default Order;