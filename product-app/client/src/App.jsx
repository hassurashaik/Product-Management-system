// App.jsx
import { Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero/Hero";
import AddProduct from "./pages/AddProduct";
import ViewProducts from "./pages/ViewProducts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/products" element={<ViewProducts />} />
    </Routes>
  );
}

export default App;
