import { useEffect, useState } from "react";
import "./Product.css";
import { Mosaic } from "react-loading-indicators";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cartMap, setCartMap] = useState({}); // id -> true/false
  const [loading, setLoading] = useState(true); // start as loading
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://fakestoreapi.com/products");

      if (!response.ok) {
        throw new Error(
          `HTTP error! status: ${response.status} ${response.statusText}`,
        );
      }

      const data = await response.json();
      setProducts(data);
      console.log(data);
    } catch (err) {
      console.error("Error fetching products:", err);
      setError(err.message || "Something went wrong");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2500);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleToggleCart = (id) => {
    setCartMap((prev) => ({
      ...prev,
      [id]: !prev[id], // toggle this product
    }));
    console.log(id);
  };

  return (
    <main>
      {loading && (
        <div className="loading">
          <Mosaic color="#d961ed" size="medium" text="" textColor="" />{" "}
        </div>
      )}

      {error && !loading && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && (
        <div className="product">
          {products.map((item) => {
            const inCart = !!cartMap[item.id];

            return (
              <ul key={item.id}>
                <img src={item.image} alt={item.title} />
                <li className="title">{item.title}</li>
                <li className="des">
                  <strong>Description: </strong> {item.description}
                </li>
                <li className="category">Category: {item.category}</li>
                <li className="price">Price: ${item.price}</li>
                <span className="product-rating">
                  Ratings: ⭐{item.rating?.rate} ({item.rating?.count})
                </span>
                <button
                  className="add-btn"
                  onClick={() => handleToggleCart(item.id)}
                >
                  {inCart ? (
                    <div className="remove">Remove From Cart</div>
                  ) : (
                    <div className="added">Add to Cart</div>
                  )}
                </button>
              </ul>
            );
          })}
        </div>
      )}
    </main>
  );
};

export default Products;
