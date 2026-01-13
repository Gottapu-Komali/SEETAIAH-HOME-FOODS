import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';

const sweetItems = [
    // --- KAJU SPECIALTIES ---
    {
        id: 1,
        name: "Kaju Katli Royale",
        price: "₹600",
        unit: "500g",
        description: "Exquisite diamond-shaped cashew fudge made with premium Grade-A nuts and fine silver vark.",
        image: "/kaju_katli_luxury_1768191580496.png",
        badge: "Bestseller"
    },
    {
        id: 2,
        name: "Kaju Pista Roll",
        price: "₹650",
        unit: "500g",
        description: "Silky cashew fudge rolled with a rich, nutty pistachio filling. A classic celebration treat.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPZYJ_Vv5yU3zIQgqD2hCFM9npqt7UzZNqLA&s"
    },
    {
        id: 3,
        name: "Kaju Sandwich",
        price: "₹680",
        unit: "500g",
        description: "Triple-layered delight with pistachio filling between smooth cashew nut layers.",
        image: "https://i.ytimg.com/vi/aBG86ATSRJU/oardefault.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLDFWByWCKrSqZgrTk29qBLzRiijWQ"
    },
    {
        id: 4,
        name: "Kaju Kalash",
        price: "₹700",
        unit: "500g",
        description: "Handcrafted pot-shaped kaju sweets filled with crunchy dry fruits and flavored with saffron.",
        image: "https://5.imimg.com/data5/SELLER/Default/2023/1/EH/XY/XQ/15867160/kaju-kalash.jpg",
        badge: "Exotic"
    },
    {
        id: 5,
        name: "Kaju Carrot",
        price: "₹720",
        unit: "500g",
        description: "Artistically handcrafted carrot-shaped cashew fudge, naturally colored and topped with a pistachio stem.",
        image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/sweet-mithai/u/y/q/500-kaju-carrot-1-prakruthi-original-imagr7yv7vszvzhy.jpeg?q=20"
    },
    {
        id: 51,
        name: "Kaju Anjeer Roll",
        price: "₹650",
        unit: "500g",
        description: "Nutritious roll made with premium cashews and a rich fig (anjeer) center.",
        image: "https://api.vivaanfood.com/uploads/product/1643960017-Anjeer-Roll.jpg"
    },

    // --- KALAKAND SPECIALTIES ---
    {
        id: 7,
        name: "Royal Kalakand",
        price: "₹280",
        unit: "500g",
        description: "Traditional white milk cake with a grainy texture, slow-cooked to perfection with cardamom.",
        image: "https://img.freepik.com/premium-photo/kalakand-is-indian-sweet-is-made-from-solidified-sweetened-milk-paneer-served-bowl-with-dry-fruit-toppingsselective-focus_726363-896.jpg",
        badge: "Fresh"
    },
    {
        id: 8,
        name: "Ajmeri Kalakand",
        price: "₹320",
        unit: "500g",
        description: "Deeply caramelized and rich brown milk cake, offering a dense, nutty flavor profile.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB3u3lEYVPimKhFusKDFdV4qJmflD5li_ghQ&s"
    },
    {
        id: 9,
        name: "Kesar Kalakand",
        price: "₹320",
        unit: "500g",
        description: "Saffron-infused milk cake with a royal aroma and a vibrant golden hue.",
        image: "https://5.imimg.com/data5/SELLER/Default/2022/10/YV/EX/MT/110515152/kesar-kalakand.jpg"
    },
    {
        id: 10,
        name: "Chocolate Kalakand",
        price: "₹340",
        unit: "500g",
        description: "Delicious fusion of traditional grainy milk cake and rich Belgian chocolate cocoa.",
        image: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Pooja_Thakur/Chocolate_Kalakand_Recipe-1.jpg"
    },

    // --- LADDU VARIETIES ---
    {
        id: 13,
        name: "Motichoor Laddu",
        price: "₹280",
        unit: "500g",
        description: "Fine-grained pearls of gram flour fried in ghee and soaked in sugar syrup. A festive favorite.",
        image: "https://5.imimg.com/data5/SELLER/Default/2023/3/296889557/HF/MX/EK/78941564/boondi-laddu.jpg",
        badge: "Festive"
    },
    {
        id: 131,
        name: "Besan Laddu",
        price: "₹240",
        unit: "500g",
        description: "Roasted gram flour with pure desi ghee and crunchy nuts. High protein and delicious.",
        image: "https://sangamsweets.in/cdn/shop/files/BesanLadduNew.webp?v=1745229887"
    },
    {
        id: 132,
        name: "Dry Fruit Laddu",
        price: "₹450",
        unit: "500g",
        description: "Nutritious traditional sweet made with a mix of premium dry fruits, nuts, and organic jaggery.",
        image: "https://aartimadan.com/wp-content/uploads/2023/10/Dry-Fruit-Ladoo.jpg"
    },
    {
        id: 133,
        name: "Malai Laddu",
        price: "₹300",
        unit: "500g",
        description: "Creamy white laddoos made with fresh paneer (chhena) and thickened milk.",
        image: "https://i.ytimg.com/vi/Zd-9tVsITFg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCvv3t_3QKYOx9TvLHgvRrrMeSo0Q"
    },

    // --- OTHER CLASSICS ---
    {
        id: 11,
        name: "Premium Gulab Jamun",
        price: "₹250",
        unit: "500g",
        description: "Luxurious khoya dumplings, gold-leafed and soaked in aromatic saffron-rose syrup.",
        image: "/premium_gulab_jamun_1768191563615.png",
        badge: "Royal"
    },
    {
        id: 12,
        name: "Saffron Rasmalai",
        price: "₹180",
        unit: "2 pcs",
        description: "Soft cottage cheese discs immersed in thickened, saffron-infused milk and pistachios.",
        image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/rasmalai-recipe.jpg"
    },
    {
        id: 14,
        name: "Special Mysore Pak",
        price: "₹350",
        unit: "500g",
        description: "The legendary South Indian royal sweet made with gram flour and an abundance of pure ghee.",
        image: "https://www.anandsweets.in/cdn/shop/products/MysorePak.png?v=1742813469&width=1946"
    },
    {
        id: 15,
        name: "Ukadiche Modak",
        price: "₹240",
        unit: "5 pcs",
        description: "Steamed rice flour dumplings with a sweet coconut and jaggery filling. Ganesha's favorite.",
        image: "https://t3.ftcdn.net/jpg/04/55/93/78/360_F_455937862_uI69IqonHn3I0mX1d6JvF9n3mN1YqNfT.jpg"
    },
    {
        id: 16,
        name: "Peanut Chikki",
        price: "₹140",
        unit: "500g",
        description: "Crunchy traditional candy made with roasted peanuts and sugar/jaggery. A healthy snack.",
        image: "https://m.media-amazon.com/images/I/81Qxp3-lVnL._AC_UF894,1000_QL80_.jpg"
    },
    {
        id: 17,
        name: "Saffron Jalebi",
        price: "₹160",
        unit: "500g",
        description: "Crispy, deep-fried spirals soaked in saffron-scented sugar syrup. Best enjoyed warm.",
        image: "https://images.halaal.recipes/04-03-18/2018-03-04-13-36-30-kQfhg.jpg"
    },
    {
        id: 18,
        name: "Bengali Rasgulla",
        price: "₹150",
        unit: "6 pcs",
        description: "Spongy, snow-white spheres of fresh chhena soaked in light sugar syrup.",
        image: "https://newdilpasand.com/wp-content/uploads/2022/03/IMG_9218.jpg"
    },
    {
        id: 19,
        name: "Gajar Ka Halwa",
        price: "₹300",
        unit: "500g",
        description: "Slow-cooked carrot pudding with milk, sugar, and dry fruits. A winter specialty.",
        image: "https://www.yummytummyaarthi.com/wp-content/uploads/2017/10/1-1.jpg"
    },
    {
        id: 20,
        name: "Malpua with Rabri",
        price: "₹250",
        unit: "2 pcs",
        description: "Deep-fried Indian pancakes topped with a layer of thick, creamy heavenly rabri.",
        image: "https://www.vegrecipesofindia.com/wp-content/uploads/2014/06/malpua-recipe-1.jpg"
    }
];

const kovaItems = [
    {
        id: 201,
        name: "Authentic Palkova",
        price: "₹300",
        unit: "500g",
        description: "Pure milk reduced to a rich, fudgy consistency with just the right amount of sweetness.",
        image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/07/palkova-recipe.jpg",
        badge: "Pure Milk"
    },
    {
        id: 202,
        name: "Kova Puri",
        price: "₹350",
        unit: "500g",
        description: "Soft, golden-fried pastries filled with a luscious, aromatic kova (khoya) stuffing.",
        image: "https://vaya.in/recipes/wp-content/uploads/2018/02/Kova-Puri.jpg"
    },
    {
        id: 203,
        name: "Kova Gujiya",
        price: "₹280",
        unit: "500g",
        description: "Classic festive dumplings filled with sweetened kova, dry fruits, and green cardamom.",
        image: "https://5.imimg.com/data5/SELLER/Default/2023/1/EH/XY/XQ/15867160/kova-gujiya.jpg"
    },
    {
        id: 204,
        name: "Dry Fruit Kova",
        price: "₹380",
        unit: "500g",
        description: "Rich kova base blended with premium finely chopped almonds, cashews, and pistachios.",
        image: "https://5.imimg.com/data5/SELLER/Default/2023/1/NR/XN/OM/15867160/dry-fruit-khoya.jpg"
    },
    {
        id: 205,
        name: "Malai Cham Cham",
        price: "₹220",
        unit: "6 pcs",
        description: "Traditional Bengali sweet made from fresh paneer, colored and filled with flavored kova.",
        image: "https://newdilpasand.com/wp-content/uploads/2022/03/Cham-Cham.jpg"
    }
];

const hotItems = [
    {
        id: 101,
        name: "Special Spicy Mixture",
        price: "₹180",
        unit: "500g",
        description: "A crunchy blend of gram flour noodles, peanuts, and fried lentils with spicy seasoning.",
        image: "https://m.media-amazon.com/images/I/81Qxp3-lVnL._AC_UF894,1000_QL80_.jpg",
        badge: "Best Seller"
    },
    {
        id: 102,
        name: "Butter Murukulu",
        price: "₹160",
        unit: "500g",
        description: "Traditional crunchy spirals made with rice flour and a touch of fresh butter.",
        image: "https://m.media-amazon.com/images/I/71uV2qT471L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 103,
        name: "Pappu Chekkalu",
        price: "₹170",
        unit: "500g",
        description: "Crispy rice crackers embedded with chana dal, curry leaves, and green chilies.",
        image: "https://pushmycart.in/cdn/shop/files/maxresdefault_30b29a6d-7eae-4d69-a4be-20a73646f62d.jpg?v=1726814001&width=1445"
    },
    {
        id: 104,
        name: "Kara Boondi",
        price: "₹150",
        unit: "500g",
        description: "Deep-fried gram flour pearls tossed with cashews, curry leaves, and red chili powder.",
        image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/10/kara-boondi-recipe.jpg"
    },
    {
        id: 105,
        name: "Hot Samosa",
        price: "₹80",
        unit: "4 pcs",
        description: "Crispy triangular pastries filled with spiced potato and pea filling.",
        image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe.jpg"
    },
    {
        id: 106,
        name: "Onion Pakoda",
        price: "₹120",
        unit: "500g",
        description: "Crispy, deep-fried onion fritters seasoned with turmeric and green chilies.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP__sYm6NlQXCLMb_5BdYmikVyrE6IBhqE3g&s"
    }
];

const Menu = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredSweets = useMemo(() =>
        sweetItems.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase())
        ), [searchTerm]);

    const filteredKova = useMemo(() =>
        kovaItems.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase())
        ), [searchTerm]);

    const filteredHot = useMemo(() =>
        hotItems.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase())
        ), [searchTerm]);

    const hasNoResults = filteredSweets.length === 0 && filteredKova.length === 0 && filteredHot.length === 0;

    return (
        <div className="menu-page">
            <header className="menu-header">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Our Signature Collection
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    A visual feast of authentic Indian delicacies, handcrafted for true connoisseurs.
                </motion.p>

                <motion.div
                    className="search-container"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <Search className="search-icon" size={20} />
                    <input
                        type="text"
                        placeholder="Search for your favorite sweets..."
                        className="menu-search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </motion.div>
            </header>

            <AnimatePresence mode="wait">
                {hasNoResults ? (
                    <motion.div
                        key="no-results"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="no-results-message"
                    >
                        <h3>No delicacies found matching "{searchTerm}"</h3>
                        <p>Try searching for something else like "Laddu" or "Kaju"</p>
                        <button onClick={() => setSearchTerm("")} className="reset-search-btn">View All Items</button>
                    </motion.div>
                ) : (
                    <motion.div
                        key="results"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Sweets Section */}
                        {filteredSweets.length > 0 && (
                            <section className="menu-section">
                                <h2 className="section-title">Sweet Masterpieces</h2>
                                <div className="menu-grid">
                                    {filteredSweets.map((item, index) => (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: index * 0.05 }}
                                            viewport={{ once: true }}
                                            className="menu-item-card"
                                        >
                                            {item.badge && <span className="item-badge">{item.badge}</span>}
                                            <div className="item-image-box">
                                                <img src={item.image} alt={item.name} loading="lazy" />
                                            </div>
                                            <div className="item-details">
                                                <h2>{item.name}</h2>
                                                <div className="item-price">{item.price} / {item.unit}</div>
                                                <p>{item.description}</p>
                                                <button className="add-to-cart-btn">Add to Cart</button>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Kova Section */}
                        {filteredKova.length > 0 && (
                            <section className="menu-section">
                                <h2 className="section-title">Kova Specialties</h2>
                                <div className="menu-grid">
                                    {filteredKova.map((item, index) => (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: index * 0.05 }}
                                            viewport={{ once: true }}
                                            className="menu-item-card"
                                        >
                                            {item.badge && <span className="item-badge">{item.badge}</span>}
                                            <div className="item-image-box">
                                                <img src={item.image} alt={item.name} loading="lazy" />
                                            </div>
                                            <div className="item-details">
                                                <h2>{item.name}</h2>
                                                <div className="item-price">{item.price} / {item.unit}</div>
                                                <p>{item.description}</p>
                                                <button className="add-to-cart-btn">Add to Cart</button>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Hot Section */}
                        {filteredHot.length > 0 && (
                            <section className="menu-section hot-section">
                                <h2 className="section-title">Savory Selection</h2>
                                <div className="menu-grid">
                                    {filteredHot.map((item, index) => (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.4, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="menu-item-card hot-card"
                                        >
                                            <div className="item-image-box">
                                                <img src={item.image} alt={item.name} loading="lazy" />
                                            </div>
                                            <div className="item-details">
                                                <h2>{item.name}</h2>
                                                <div className="item-price">{item.price} / {item.unit}</div>
                                                <p>{item.description}</p>
                                                <button className="add-to-cart-btn">Add to Cart</button>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Menu;
