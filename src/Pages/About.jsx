import { useState } from "react";
import HyperLink from "../Components/HyperLink";

export default function About() {
  const [data, setData] = useState("sky");
  const [gambar, setGambar] = useState();

  const color = ["sky", "red", "green"];
  const picture =[
    "/react-my-project/gambar1.jpg",
    "/react-my-project/sunset.jpg",
    "/react-my-project/gambar2.jpg"
    ];

  return (
    <div>
      <h1>About</h1>
      <HyperLink to={"/react-my-project/"}>
        <p>Go To Home</p>
      </HyperLink>

      <div className={"h-20 w-20 bg-" + data + "-500"}></div>
      <button onClick={() => setData(color[0])}>Sky</button>
      <button onClick={() => setData(color[1])}>Red</button>
      <button onClick={() => setData(color[2])}>Green</button>
      <br/>
      <img  src={gambar} alt={gambar} className="w-32 h-32"/>
      <select onChange={(e) => setGambar(picture[e.target.value])}>
        <option value=""> Pilih Gambar</option>
        <option value={0}>Gambar 1</option>
        <option value={1}>Gambar 2</option>
        <option value={2}>Gambar 3</option>
      </select>
    </div>
  );
}
