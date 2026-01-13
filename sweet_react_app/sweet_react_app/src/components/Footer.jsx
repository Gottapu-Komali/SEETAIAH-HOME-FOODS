import React from 'react';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Seetaiah Home Foods. All Rights Reserved.</p>
                <p className="footer-tagline">Crafted for Sweet Lovers. Traditional Taste, Modern Heart.</p>
            </div>
        </footer>
    );
};

export default Footer;
