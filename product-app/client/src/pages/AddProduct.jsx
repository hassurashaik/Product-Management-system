import { useState } from "react";
import ProductForm from "../Components/ProductForm";
import { addProduct } from "../api";
import { useNavigate } from "react-router-dom";
import "../css/AddProduct.css";
import logo from "../assets/p.png"; // ✅ import logo image

export default function AddProduct() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (payload) => {
    try {
      setLoading(true);
      await addProduct(payload);
      navigate("/products");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // ✅ handle logo click → navigate home
  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div className="form-wrapper">
      {/* 🔹 Logo at top-left */}
      <div className="logo-container" onClick={handleLogoClick}>
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="form-container">
        <h1>Add Product</h1>
        {loading && <p>Loading...</p>}
        <ProductForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
