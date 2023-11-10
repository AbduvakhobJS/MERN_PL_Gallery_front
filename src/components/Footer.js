import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <nav className="navbar bg-dark shadow-lg">
            
                <div className="container-fluid">
                    
                    
                    <div id="icons" className='container-fluid'>
                    <span id='span1' className="navbar-text text-light">
                        Designed by Abduvakhob | Copiright 2023 
                    </span>
                    <Link to={'https://instagram.com/abdurakhhmonov__a'}> <i id='icon' className="bi bi-instagram text-light"></i></Link>
                    <Link to={'https://t.me/abduvakhob_node'}> <i id='icon' className="bi bi-telegram text-light"></i></Link>
                    <Link to={'https://github.com/AbduvakhobJS'}> <i id='icon' className="bi bi-github text-light"></i></Link>
                    </div>
                    
                </div>
            </nav>
        </footer>

    )
}




export default Footer;
