import { lazy, Suspense } from "react";
const Header = lazy(() => import("./Components/header/Header.jsx"));
const Footer = lazy(() => import("./Components/footer/Footer"));
const Home = lazy(() => import("./Components/Home.jsx"));
const Products = lazy(() => import("./Components/product/Products"));

const App = () => {
  const handleBackToTop = () => {
    // scroll the .scroll-container to top
    const container = document.querySelector(".scroll-container");
    if (container) {
      container.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="scroll-container">
      <Suspense fallback={null}>
        <Header />
        <Home />
        <Products />
        <Footer />
      </Suspense>

      <button className="back-to-top" onClick={handleBackToTop}>
        ↑ Back to top
      </button>
    </div>
  );
};

export default App;
