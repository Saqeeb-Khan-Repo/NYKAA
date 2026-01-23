import { lazy, Suspense } from "react";
const Header = lazy(() => import("./Components/header/Header.jsx"));
const Footer = lazy(() => import("./Components/footer/Footer"));
const Home = lazy(() => import("./Components/Home.jsx"));
import ProductCart from "./Components/Cart/ProductCart.jsx";
const App = () => {
  return (
    <div>
      <Suspense>
      {/* <ProductCart/> */}
        <Header />
        <Home />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
