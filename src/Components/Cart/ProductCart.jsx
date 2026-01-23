import "./ProductCart.css";
import { FaArrowLeftLong } from "react-icons/fa6";

const ProductCart = ({ setIsOpen }) => {
  return (
    <aside className="cart open">
      <div className="cart-header">
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Close cart"
          className="cart-back-btn"
        >
          <FaArrowLeftLong />
        </button>
        <span>Bag</span>
      </div>

      <div className="cart-body">
        <h1>YOUR Shipping Bag Is Empty</h1>
        <p>This feels too light! Go On, Add all Your Favourites</p>
        <button className="btn-s">Start Shopping</button>
      </div>
    </aside>
  );
};

export default ProductCart;
