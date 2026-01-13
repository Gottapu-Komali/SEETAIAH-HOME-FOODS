import React from 'react';
import { motion } from 'framer-motion';
import { Package, Truck, CheckCircle, Clock, MapPin } from 'lucide-react';

// Mock Order Data - in a real app, this would come from the backend/database
const previousOrders = [
    {
        id: "SF-82941",
        date: "2026-01-12",
        time: "10:15 AM",
        status: "In Transit",
        items: [
            { name: "Premium Gulab Jamun", qty: "500g", price: 250 },
            { name: "Special Spicy Mixture", qty: "500g", price: 180 }
        ],
        total: 430,
        address: "Kondapur, Hyderabad",
        progress: 75
    },
    {
        id: "SF-82905",
        date: "2026-01-11",
        time: "04:30 PM",
        status: "Delivered",
        items: [
            { name: "Kaju Katli Royale", qty: "1kg", price: 1200 },
            { name: "Butter Murukulu", qty: "500g", price: 160 }
        ],
        total: 1360,
        address: "Gachibowli, Hyderabad",
        progress: 100
    },
    {
        id: "SF-82882",
        date: "2026-01-10",
        time: "11:20 AM",
        status: "Delivered",
        items: [
            { name: "Royal Kalakand", qty: "500g", price: 280 }
        ],
        total: 280,
        address: "Banjara Hills, Hyderabad",
        progress: 100
    }
];

const TrackOrder = () => {
    return (
        <div className="track-order-page">
            <header className="track-header">
                <h1>Track Your Orders</h1>
                <p>Monitor your delicious deliveries in real-time.</p>
            </header>

            <div className="orders-container">
                {previousOrders.map((order, index) => (
                    <motion.div
                        key={order.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className={`order-card ${order.status === 'Delivered' ? 'delivered' : 'active-order'}`}
                    >
                        <div className="order-main-info">
                            <div className="order-id-section">
                                <span className="order-label">Order ID</span>
                                <h3>#{order.id}</h3>
                                <span className={`status-pill ${order.status.toLowerCase().replace(' ', '-')}`}>
                                    {order.status === 'Delivered' ? <CheckCircle size={14} /> : <Clock size={14} />}
                                    {order.status}
                                </span>
                            </div>
                            <div className="order-meta">
                                <p><strong>Placed on:</strong> {order.date} at {order.time}</p>
                                <p><MapPin size={14} /> {order.address}</p>
                            </div>
                        </div>

                        <div className="order-details-grid">
                            <div className="order-items-list">
                                <h4>Items Ordered</h4>
                                <ul>
                                    {order.items.map((item, i) => (
                                        <li key={i}>
                                            <span>{item.name} ({item.qty})</span>
                                            <span className="item-price">₹{item.price}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="order-total-row">
                                    <span>Total Amount</span>
                                    <span className="total-amt">₹{order.total}</span>
                                </div>
                            </div>

                            <div className="order-tracking-viz">
                                <h4>Delivery Progress</h4>
                                <div className="progress-bar-container">
                                    <div
                                        className="progress-bar-fill"
                                        style={{ width: `${order.progress}%` }}
                                    ></div>
                                </div>
                                <div className="tracking-steps">
                                    <div className={`step ${order.progress >= 25 ? 'completed' : ''}`}>
                                        <div className="step-icon"><Package size={16} /></div>
                                        <span>Packed</span>
                                    </div>
                                    <div className={`step ${order.progress >= 75 ? 'completed' : ''}`}>
                                        <div className="step-icon"><Truck size={16} /></div>
                                        <span>Transit</span>
                                    </div>
                                    <div className={`step ${order.progress === 100 ? 'completed' : ''}`}>
                                        <div className="step-icon"><CheckCircle size={16} /></div>
                                        <span>Delivered</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {order.status !== 'Delivered' && (
                            <div className="order-actions">
                                <button className="btn-secondary">Contact Partner</button>
                                <button className="btn-primary-small">View Live Map</button>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default TrackOrder;
