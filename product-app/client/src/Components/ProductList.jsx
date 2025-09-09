import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Controls from "./Controls";
import "../css/ProductList.css";

export default function ProductList({ products, onDelete, onEdit }) {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    let temp = products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );

    if (sortOrder === "asc") temp.sort((a, b) => a.price - b.price);
    else temp.sort((a, b) => b.price - a.price);

    setFilteredProducts(temp);
  }, [products, search, sortOrder]);

  return (
    <div className="product-list-page">
      <Controls
        search={search}
        setSearch={setSearch}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        onApply={() => {}}
      />

      {filteredProducts.length === 0 ? (
        <div className="muted center">No products found.</div>
      ) : (
        <div className="grid">
          {filteredProducts.map((p) => (
            <ProductCard
              key={p._id}
              product={p}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </div>
      )}
    </div>
  );
}
