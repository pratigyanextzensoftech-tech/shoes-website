import "./App.css";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import HeroSlider from "./component/header/heroSlider/HeroSlider";
import Product from "./component/product/Product";

function App() {
  return <div>
    <Header/>
    <HeroSlider/>
    <Product/>
    <Footer/>
  </div>;
}

export default App;
