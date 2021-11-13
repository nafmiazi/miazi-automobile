import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddCars.css';

const AddCars = () => {
    const { register, handleSubmit, reset } = useForm();
    
    const onSubmit = data => {
        axios.post('https://sheltered-meadow-11966.herokuapp.com/cars', data)
        .then(res => {
            if(res.data.insertedId){
                alert("Added Successfully");
                reset();
            }
        })
    };
    
    return (
        <div className="add-destination p-4 my-5 w-50 m-auto">
            <>
                <h2 className="text-center text-warning mb-4">Add New Cars</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true})} placeholder="Name"/>
                    <input {...register("img", { required: true})} placeholder="Image Url"/>
                    <input {...register("price", { required: true})} placeholder="Price"/>
                    <input {...register("condition", { required: true})} placeholder="Condition"/>
                    <textarea {...register("description", { required: true})} placeholder="Description"/>
                    <input className="btn btn-warning" type="submit" value="Add Cars"/>
                </form>
            </>
        </div>
    );
};

export default AddCars;