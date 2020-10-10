import React from 'react'; 
import {Link} from 'react-router-dom' ;

const Header  = () => (
    <div className="header">
        <nav className = "navbar">
            <Link  className='logo' to="/">
                <span><strong>Github</strong></span> Jobs
            </Link>
        </nav>
    </div>  
)


export default Header ;