import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import RotatingCircle from "./RotatingCircle";
import "./Hero.css";
import logo from "../../assets/p.png";


const Hero = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/"); // redirect to home
  };

  return (
    <div className="hero-container">
      {/* 🔹 Logo top-left */}
      <div className="logo-container" onClick={handleLogoClick}>
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Product Management
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Efficiently manage your products with ease — add, view, update, and
          delete seamlessly.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <button onClick={() => navigate("/add-product")} className="primary-button">
            Add Product
          </button>
          <button onClick={() => navigate("/products")} className="secondary-button">
            View Products
          </button>
        </motion.div>
      </div>

      <motion.div
        className="hero-image"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <RotatingCircle />
      </motion.div>
    </div>
  );
};

export default Hero;
