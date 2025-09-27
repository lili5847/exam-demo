import { Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import Shop from "../page/Shop";
import Nav2 from "./Nav2";
import Footer from "./Footer";

function Main() {
  return (
    <>
      <Nav2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Main;
