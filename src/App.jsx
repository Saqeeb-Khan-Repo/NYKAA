// import Header from "./Components/navbar/Header";
import { lazy, Suspense } from "react";
const Header = lazy(() => import("./Components/navbar/Header.jsx"));
const Footer = lazy(() => import("./Components/footer/Footer"));
const Home = lazy(() => import("./Components/Home.jsx"));
const App = () => {
  return (
    <div>
      <Suspense>
        <Header />
        <Home />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
