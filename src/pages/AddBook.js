import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const AddBook = () => {
    const [title, setTitle] = useState('')
    const [descr, setDescr] = useState('')
    const [image, setImage] = useState('')
    
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post("http://164.92.165.12:7000/api/travel/add",{
            title,
            descr,
            image
        })
        navigate('/')
    }


    return (
        <div id='mt5'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label text-light">Title</label>
                        <input type="text" className="form-control bg-dark text-light border-secondary" id="title" name='title' onChange={e => setTitle(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="descr" className="form-label text-light">Description</label>
                        <input type="text" className="form-control bg-dark text-light border-secondary" id="descr" name='descr' onChange={e => setDescr(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor ="image" className="form-label text-light">Image URL</label>
                        <input type="text" className="form-control bg-dark text-light border-secondary" id="image" name='image' onChange={e => setImage(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <div id='mt6'></div>
        </div>
        
    );
}

export default AddBook;
