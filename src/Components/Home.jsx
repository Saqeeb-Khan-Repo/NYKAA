import Products from "./Products";

const Home = () => {
  return (
    <main>
     
      <a href="#" style={{ cursor: "pointer" }}>
        <img src="public/banner.avif" className="img" loading="lazy" />
      </a>
      <a href="#" style={{ cursor: "pointer" }}>
        <img src="public/offer.jpg" className="img" loading="lazy" />
      </a>
      <a href="#" style={{ cursor: "pointer" }}>
        <img src="public/ban4.png" className="img" />
      </a>
      <a href="#" style={{ cursor: "pointer" }}>
        <img src="public/ban5.png" className="img" loading="lazy" />
      </a>
      <Products/>

     
    </main>
  );
};

export default Home;
