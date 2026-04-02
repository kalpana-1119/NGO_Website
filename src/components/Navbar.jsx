import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Facebook, Twitter, Instagram } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {

const [isOpen, setIsOpen] = useState(false);

return (

<>
<nav className="navbar">

<div className="navbar-container">

<Link to="/" className="navbar-logo">
<img src="/logo.png" alt="NGO Logo" className="logo-image"/>
<span className="logo-text">NGO</span>
</Link>

<div 
className="menu-icon"
onClick={()=>setIsOpen(!isOpen)}
>
{isOpen ? <X size={28}/> : <Menu size={28}/>}
</div>

<ul className={isOpen ? "nav-menu active" : "nav-menu"}>

<li>
<Link to="/" 
className="nav-links"
onClick={()=>setIsOpen(false)}>
Home
</Link>
</li>

<li>
<Link to="/about"
className="nav-links"
onClick={()=>setIsOpen(false)}>
About
</Link>
</li>

<li>
<Link to="/works"
className="nav-links"
onClick={()=>setIsOpen(false)}>
Our Works
</Link>
</li>

<li>
<Link to="/gallery"
className="nav-links"
onClick={()=>setIsOpen(false)}>
Gallery
</Link>
</li>

<li>
<Link to="/contact"
className="nav-links"
onClick={()=>setIsOpen(false)}>
Contact
</Link>
</li>

{/* <li>
<Link 
to="/volunteer"
className="nav-links-mobile btn-primary"
onClick={()=>setIsOpen(false)}
>
Volunteer
</Link>
</li> */}

</ul>

<div className="desktop-btn">
<Link to="/volunteer" className="btn-primary">
Volunteer
</Link>
</div>

</div>

</nav>


{/* SOCIAL BOX */}

{/* <div className="social-box">

<a href="#" className="social-item">
<Facebook size={18}/>
</a>

<a href="#" className="social-item">
<Twitter size={18}/>
</a>

<a href="#" className="social-item">
<Instagram size={18}/>
</a>

</div> */}

</>

);

};

export default Navbar;