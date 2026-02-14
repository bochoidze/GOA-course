import React, { useEffect, useState } from "react";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={styles.container}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <div style={styles.card}>
      <img
        src={product.image}
        alt={product.title}
        style={styles.image}
      />
      <div style={styles.info}>
        <h3 style={styles.title}>{product.title}</h3>
        <p style={styles.price}>${product.price}</p>
        <button style={styles.button}>Add to Cart</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    gap: "24px",
    padding: "24px",
    justifyItems: "center",
  },
  card: {
    width: "240px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    transition: "transform 0.2s",
  },
  image: {
    width: "100%",
    height: "240px",
    objectFit: "contain",
  },
  info: {
    marginTop: "12px",
    textAlign: "center",
  },
  title: {
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "8px",
  },
  price: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#222",
    marginBottom: "12px",
  },
  button: {
    backgroundColor: "#111",
    color: "#fff",
    padding: "10px 16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};
