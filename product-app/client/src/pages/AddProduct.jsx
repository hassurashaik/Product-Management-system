import { useState } from "react";
import ProductForm from "../Components/ProductForm";
import { addProduct } from "../api";
import { useNavigate } from "react-router-dom";
import "../css/AddProduct.css";

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

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h1>Add Product</h1>
        {loading && <p>Loading...</p>}
        <ProductForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
