import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'



const UpdateBook = () => {

    const [title, setTitle] = useState('')
    const [descr, setDescr] = useState('')
    const [image, setImage] = useState('')

    const { id } = useParams()
    const navigate = useNavigate()

    const fetchData = async () => {
        const { data } = await axios.get(`http://164.92.165.12:7000/api/travel/${id}`)
        setTitle(data.travel.title)
        setDescr(data.travel.descr)
        setImage(data.travel.image)
    }
    

    const updateHendler = async (e) => {
        e.preventDefault()
        await axios.put(`http://164.92.165.12:7000/api/travel/${id}`,{
            title,
            descr,
            image
        })
        navigate('/')
    }
    

    
    useEffect(() => {
        fetchData()
    }, []);

  return (
    <div id='mt5'>
        <div>
    <form onSubmit={updateHendler}>
        <div className="mb-3">
            <label htmlFor="title" className="form-label text-light">Title</label>
            <input type="text" className="form-control bg-dark text-light border-secondary" id="title" name='title' value={title} onChange={e => setTitle(e.target.value)}/>
        </div>
        <div className="mb-3">
            <label htmlFor="descr" className="form-label text-light">Description</label>
            <input type="text" className="form-control bg-dark text-light border-secondary" id="descr" name='descr' value={descr} onChange={e => setDescr(e.target.value)}/>
        </div>
        <div className="mb-3">
            <label htmlFor ="image" className="form-label text-light">Image URL</label>
            <input type="text" className="form-control bg-dark text-light border-secondary" id="image" name='image' value={image} onChange={e => setImage(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    
</div>
<div id='mt6'></div>
</div>
  )
}

export default UpdateBook