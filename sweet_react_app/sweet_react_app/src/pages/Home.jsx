import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div className="home-page">
            <section className="hero-section">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-content"
                >
                    <h1>SEETAIAH HOME FOODS</h1>
                    <p>Enjoy the taste of authentic Indian sweets and delicacies delivered straight to your doorstep. Handcrafted with love and tradition since 1995.</p>
                    <div className="hero-btns">
                        <Link to="/menu" className="btn-primary">
                            Explore Our Menu <ArrowRight size={20} />
                        </Link>
                    </div>
                </motion.div>
            </section>

            <section className="features">
                <div className="feature-card">
                    <Star className="feature-icon" />
                    <h3>Premium Quality</h3>
                    <p>Made with pure desi ghee and Grade-A ingredients.</p>
                </div>
                <div className="feature-card">
                    <Clock className="feature-icon" />
                    <h3>Fresh Daily</h3>
                    <p>Prepared every morning to ensure maximal flavor.</p>
                </div>
                <div className="feature-card">
                    <Truck className="feature-icon" />
                    <h3>Fast Delivery</h3>
                    <p>Delivered to your home within hours of preparation.</p>
                </div>
            </section>

            <section className="services-info">
                <h2>Our Services</h2>
                <p>Enjoy our online door-to-door services, available from 7 AM to 10 PM. We cater to weddings, festivals, and corporate events as well.</p>
            </section>
        </div>
    );
};

export default Home;
