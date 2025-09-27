import { useState } from "react";
import k2 from "./assets/image/image.png"

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
<p>hello world
</p>
<img src={k2} alt="" />

      
    </div>
  );
}
