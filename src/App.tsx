import "./App.css";
import Home from "./page/Home";
import { Route,Routes } from "react-router-dom";
import ProductDetails from './component/productDetail/ProductDetail'
import Layout from "./layout/Layout";
import Checkout from "./page/Checkout";
function App() {
  
  return <div>
     <Routes>
      <Route element={<Layout/>}>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
   
  </div>;
}

export default App;
