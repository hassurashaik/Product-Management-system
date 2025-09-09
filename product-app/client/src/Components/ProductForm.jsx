import { useEffect, useState } from "react";
import "../css/ProductForm.css";

export default function ProductForm({ onSubmit, editing, onCancel }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  useEffect(() => {
    if (editing) setForm({ ...editing });
    else
      setForm({
        name: "",
        price: "",
        description: "",
        category: "",
        image: "",
      });
  }, [editing]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setForm({ ...form, image: reader.result });
    reader.readAsDataURL(file);
  };

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || form.price === "") {
      return alert("Name and Price required");
    }
    const payload = { ...form, price: Number(form.price) };
    onSubmit(payload, !!editing);
    setForm({ name: "", price: "", description: "", category: "", image: "" });
  };

  return (
    <form className="form" onSubmit={submit}>
      <label>Name</label>
      <input
        className="input"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <label>Price</label>
      <input
        className="input"
        type="number"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />

      <label>Category</label>
      <input
        className="input"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />

      <label>Description</label>
      <textarea
        className="textarea"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      <label>Image</label>
      <input
        className="input"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />

      <div className="row">
        <button type="submit" className="btn primary">
          {editing ? "Update" : "Add Product"}
        </button>
        {editing && (
          <button type="button" className="btn ghost" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
