import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Menu', path: '/menu' },
        { name: 'About', path: '#' },
        { name: 'Track Order', path: '/track-order' },
    ];

    return (
        <header className="main-header">
            <div className="nav-container">
                <div className="logo-wrapper">
                    <Link to="/">
                        <img src="/Seetaiah_Home_Foods.jpg" alt="Logo" className="logo-img" />
                    </Link>
                </div>

                <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="nav-actions">
                    <button className="cart-btn">
                        <ShoppingCart size={22} />
                        <span className="cart-count">0</span>
                    </button>
                    <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
