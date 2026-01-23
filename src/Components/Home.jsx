import Products from "./product/Products";

const Home = () => {
  return (
    <main>
     
      <a href="#" style={{ cursor: "pointer" }}>
        <img src="/banner.avif" className="img" loading="lazy" />
      </a>
      <a href="#" style={{ cursor: "pointer" }}>
        <img src="/offer.jpg" className="img" loading="lazy" />
      </a>
      <a href="#" style={{ cursor: "pointer" }}>
        <img src="/ban4.png" className="img" />
      </a>
      <a href="#" style={{ cursor: "pointer" }}>
        <img src="/ban5.png" className="img" loading="lazy" />
      </a>
      <Products/>

     
    </main>
  );
};

export default Home;
