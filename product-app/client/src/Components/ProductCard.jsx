import "../css/ProductCard.css";
export default function ProductCard({ product, onDelete, onEdit }) {
  return (
    <div className="card modern-card fade-in">
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            borderRadius: "12px",
            objectFit: "cover",
            maxHeight: "150px",
            marginBottom: "10px",
          }}
        />
      )}

      <div className="card-header">
        <div className="name">{product.name}</div>
        <div className={`tag ${product.category.toLowerCase()}`}>
          {product.category}
        </div>
      </div>

      <div className="desc">{product.description}</div>

      <div className="card-footer">
        <div className="price">₹ {product.price}</div>
        <div className="actions">
          <button className="btn ghost" onClick={() => onEdit(product)}>
            Edit
          </button>
          <button
            className="btn danger"
            onClick={() => {
              if (window.confirm("Delete?")) onDelete(product._id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
