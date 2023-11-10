import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg text-bg-dark shadow">
        <div className="container-fluid">
            <Link className="navbar-brand text-light fw-medium " to="/">Programming Technologies</Link>
            <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span  className="navbar-toggler-icon "></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active text-light fw-medium" aria-current="page" to="/add">Add</Link>
                </li>
            </ul>
            
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar