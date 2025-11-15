import React from "react";
const name = "ლუკა";
const age = 14;
const city = "წერეთელი";
const color = "ლურჯი";
const  lastname = "ბოჭოიძე";

// HTML-ში ვიყენებთ class-ს, მაგრამ React-ში კერძოდ jsx-ში  className-ს.
 

export default function ClassVsClassName() {
  return (
    <div>
   
      <h1 className="title">React-ში className გამოიყენება</h1>

      <p className="ჯიჯი">
   გამარჯობა
      </p>

      <div className="კაცურიკაცი">
        მე ლუკა ვარ
      </div>
      <img src="photo.jpg" alt="photo" />
<br />
<input type="text" />
<hr />
<meta charSet="UTF-8" />

<h1>{10}</h1>
<p>{"გამარჯობა"+ "როგორახარ"}</p>
<p>{2 * 3}</p>
<p>{5 > 3 }</p>
<p>{1+1}</p>


<div>
  
  <p>{name}</p>
  <p>{age}</p>
  <p>{city}</p>
  <p>{color}</p>
  <p>{lastname}</p>
</div>

    </div>

  );
}
