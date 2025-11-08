import React from "react";

function ExtraComponent() {
  return (
    <div style={{ marginTop: "40px", padding: "10px", borderTop: "2px solid #ccc" }}>
      <h2> დამატებითი კომპონენტი</h2>
      <p>ეს კომპონენტი შეიქმნა იმის საჩვენებლად, რომ React-ში მარტივია კოდის დაყოფა პატარა ნაწილებად.</p>
      <ul>
        <li>Reusable component</li>
        <li>Clear structure</li>
        <li>Props support</li>
        <li>Independent styling</li>
        <li>Easy to debug</li>
      </ul>
    </div>
  );
}

export default ExtraComponent;
