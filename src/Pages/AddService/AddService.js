import axios from 'axios';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://obscure-shore-16166.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully');
                    reset();
                }
            })
    }

    return (
        <Container className="add-service p-5 mt-5">
            <h2>Add a new Service..</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title", { required: true })} placeholder="Title" />
                <textarea {...register("description")} placeholder="Description" />
                <input {...register("img")} placeholder="Image Url" />
                <input type="submit" />

            </form>
        </Container>
    );
};

export default AddService;