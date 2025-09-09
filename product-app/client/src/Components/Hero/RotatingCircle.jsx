import { useState, useEffect } from "react";
import { FaPlusCircle, FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const service = [
  { id: 1, icon: FaPlusCircle, text: "Add Product" },
  { id: 2, icon: FaEye, text: "View Products" },
  { id: 3, icon: FaEdit, text: "Update Product" },
  { id: 4, icon: FaTrash, text: "Delete Product" },
];

const RotatingCircle = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [rotate, setRotate] = useState(0);

  const rotateDiv = () => {
    setRotate((prev) => prev + 90);
    setActiveTab((prev) => (prev === 4 ? 1 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(rotateDiv, 2000);
    return () => clearInterval(interval);
  }, []);

  const ActiveIcon = service[activeTab - 1].icon;

  return (
    <div style={{ position: "relative", width: "250px", height: "250px" }}>
      <div
        className="circle_side"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          transform: `rotate(${rotate}deg)`,
          transition: "transform 1s ease-in-out",
        }}
      >
        {service.map((s) => (
          <div
            key={s.id}
            className={`icons ${activeTab === s.id ? "active" : ""}`}
            style={{
              position: "absolute",
              width: "50px",
              height: "50px",
              left:
                s.id === 1
                  ? "50%"
                  : s.id === 2
                  ? "100%"
                  : s.id === 3
                  ? "50%"
                  : "0",
              top:
                s.id === 1
                  ? "0"
                  : s.id === 2
                  ? "50%"
                  : s.id === 3
                  ? "100%"
                  : "50%",
              transform: `translate(-50%, -50%) rotate(-${rotate}deg)`,
              cursor: "pointer",
            }}
            onClick={() => {
              setActiveTab(s.id);
              setRotate((prev) => prev + 90);
            }}
          >
            <s.icon size={30} />
          </div>
        ))}
      </div>

      <div
        style={{
          color: "#7c3aed",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <h3>{service.find((s) => s.id === activeTab)?.text}</h3>
      </div>
    </div>
  );
};

export default RotatingCircle;
