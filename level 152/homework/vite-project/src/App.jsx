import React, { useState } from "react";
import "./App.css";

function App() {
  // simple image list (put these files in public/images/)
  const images = [
    { id: 1, src: "/images/thumb1.jpg", alt: "thumb 1" },
    { id: 2, src: "/images/thumb2.jpg", alt: "thumb 2" },
    { id: 3, src: "/images/thumb3.jpg", alt: "thumb 3" },
    { id: 4, src: "/images/main.jpg", alt: "main" }, // alternate view / model
  ];

  const colors = [
    { id: "olive", label: "ოლივი", hex: "#6B6F41" },
    { id: "teal", label: "ტიმი", hex: "#2F6F68" },
    { id: "navy", label: "ნევი", hex: "#3F3450" },
  ];

  const sizes = ["S", "M", "L", "XL"];

  const [selectedImg, setSelectedImg] = useState(images[3].src); // show main by default
  const [selectedColor, setSelectedColor] = useState(colors[0].id);
  const [selectedSize, setSelectedSize] = useState("L");
  const [qty, setQty] = useState(1);

  // pricing
  const originalPrice = 300;
  const salePrice = 260;

  function handleAddToCart() {
    // simple action: console.log and small alert
    const product = {
      title: "ONE LIFE GRAPHIC T-SHIRT",
      color: selectedColor,
      size: selectedSize,
      qty,
      priceEach: salePrice,
      total: salePrice * qty,
    };
    console.log("Add to cart:", product);
    alert(
      `Added to cart:\n${product.title}\nფერი: ${selectedColor}\nზომა: ${selectedSize}\nრაოდენობა: ${qty}\nჯამი: $${product.total}`
    );
  }

  return (
    <div className="page">
      <div className="product-card">
        <aside className="thumbs">
          {images.map((img) => (
            <button
              key={img.id}
              className={`thumb-btn ${selectedImg === img.src ? "active" : ""}`}
              onClick={() => setSelectedImg(img.src)}
              aria-label={`Select image ${img.id}`}
            >
              <img src={img.src} alt={img.alt} />
            </button>
          ))}
        </aside>

        <main className="gallery">
          <div className="main-image">
            <img src={selectedImg} alt="Selected product" />
          </div>
        </main>

        <section className="details">
          <h1 className="title">ONE LIFE GRAPHIC T-SHIRT</h1>

          <div className="rating-row">
            <div className="stars">
              <span>★★★★★</span>
            </div>
            <div className="rating-num">4.5/5</div>
          </div>

          <div className="price-row">
            <div className="price-sale">${salePrice}</div>
            <div className="price-old">${originalPrice}</div>
            <div className="discount">-40%</div>
          </div>

          <p className="desc">
            ეს ტიში იდეალურია ყოველდღიური ჩაცმისთვის. ნაზი და სასუნთქი მასალა,
            კომფორტული თავისუფალი ფიტი.
          </p>

          <div className="divider" />

          <div className="option-group">
            <div className="label">ფერი</div>
            <div className="colors">
              {colors.map((c) => (
                <button
                  key={c.id}
                  className={`color-btn ${selectedColor === c.id ? "selected" : ""}`}
                  onClick={() => setSelectedColor(c.id)}
                  title={c.label}
                >
                  <span
                    className="swatch"
                    style={{ backgroundColor: c.hex }}
                    aria-hidden="true"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="option-group">
            <div className="label">ზომა</div>
            <div className="sizes">
              {sizes.map((s) => (
                <button
                  key={s}
                  className={`size-btn ${selectedSize === s ? "active" : ""}`}
                  onClick={() => setSelectedSize(s)}
                >
                  {s === "S"
                    ? "Small"
                    : s === "M"
                    ? "Medium"
                    : s === "L"
                    ? "Large"
                    : "X-Large"}
                </button>
              ))}
            </div>
          </div>

          <div className="divider" />

          <div className="cart-row">
            <div className="qty-control">
              <button
                className="circle"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                aria-label="decrease quantity"
              >
                −
              </button>
              <div className="qty">{qty}</div>
              <button
                className="circle"
                onClick={() => setQty((q) => q + 1)}
                aria-label="increase quantity"
              >
                +
              </button>
            </div>

            <button className="add-cart" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>

          <div className="small-note">
            მასალა: 100% კოტონი · მოწესრიგებული გადაცვლა 14 დღე.
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
