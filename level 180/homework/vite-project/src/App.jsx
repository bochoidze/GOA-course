import React, { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div style={{ padding: "30px" }}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />

      <br /><br />

      {/* 🆕 ახალი ველი — email */}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <br /><br />

      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
}
