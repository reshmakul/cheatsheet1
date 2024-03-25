import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Maiwand from "./component/Maiwand";
import Marco from "./component/Marco";
import Reshma from "./component/Reshma";
import Home from "./component/Home";
import Navbar from "./component/Navbar";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>
        <Route path="/Maiwand" element={<Maiwand />}></Route>
        <Route path="/Marco" element={<Marco />}></Route>
        <Route path="/Reshma" element={<Reshma />}></Route>
      </Routes>
    </>
  );
}

export default App;
