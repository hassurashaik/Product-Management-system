import { useEffect, useState } from "react";
import ProductList from "../Components/ProductList";
import ProductForm from "../Components/ProductForm";
import { getProducts, deleteProduct, updateProduct } from "../api";
import { useNavigate } from "react-router-dom";   // ✅ import navigate
import "../css/ViewProducts.css";
import logo from "../assets/p.png";              // ✅ logo import (adjust path if needed)

export default function ViewProducts() {
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // ✅ for redirect

  // Fetch products
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch products!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Delete product
  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setProducts(products.filter((p) => p._id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete product!");
    }
  };

  // Update product
  const handleUpdate = async (payload) => {
    try {
      const updated = await updateProduct(editing._id, payload);
      setProducts(products.map((p) => (p._id === updated._id ? updated : p)));
      setEditing(null);
      alert("Product updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to update product!");
    }
  };

  return (
    <div className="container">
      {/* 🔹 Logo top-left */}
      <div className="logo-container" onClick={() => navigate("/")}>
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <h1>View Products</h1>

      {/* Edit Panel */}
      {editing && (
        <>
          <div className="panel-overlay" onClick={() => setEditing(null)}></div>
          <div className="panel" role="dialog" aria-modal="true">
            <div className="panel-header">
              <h2>Edit Product</h2>
            </div>
            <div className="panel-content">
              <ProductForm
                editing={editing}
                onSubmit={handleUpdate}
                onCancel={() => setEditing(null)}
              />
            </div>
          </div>
        </>
      )}

      {/* Product List */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ProductList
          products={products}
          onDelete={handleDelete}
          onEdit={(p) => setEditing(p)} // opens modal
        />
      )}
    </div>
  );
}
