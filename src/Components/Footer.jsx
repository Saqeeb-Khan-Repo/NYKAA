import "./Footer.css";
import { footer1, footer2, footer3 } from "./data.js";

const Footer = () => {
  return (
    <>
      <div className="footer-left">
        <img src="/dis.png" className="img" alt="Discount" loading="lazy" />
        <img
          src="/footer1.png"
          className="img"
          alt="Footer banner"
          loading="lazy"
        />
      </div>
      <footer className="footer">
        <div className="footer-column footer1">
          <h2>NYKAA</h2>
          {footer1.map((item, i) => (
            <a href="#" key={i}>
              {item}
            </a>
          ))}
        </div>

        <div className="footer-column footer1">
          <h2>HELP</h2>
          {footer2.map((item, i) => (
            <a href="#" key={i}>
              {item}
            </a>
          ))}
        </div>

        <div className="footer-column footer1">
          <h2>Top Categories</h2>
          {footer3.map((item, i) => (
            <a href="#" key={i}>
              {item}
            </a>
          ))}
        </div>
      </footer>
      <img
        src="/footer2.png"
        className="img"
        alt="Footer banner"
        loading="lazy"
      />
      <div className="footer4">
        <div className="footer3">
          <a href="#">Terms & Conditions</a>
          <a href="#">Shipping Policy</a>
          <a href="#">Cancellation Policy</a>
          <a href="#">Privacy Policy</a>
          <div className="Span">
            <span>@2026 NYKAA E-Commerce Website All Rights Reserved</span>
          </div>
        </div>
      </div>
      <div className="footer5">
        <span>Popular Links</span>
        <a href="#">
          lipstick,highlighter,hair serum,concealer,face mask,biotique,lip
          gloss,perfume for women,facial kit,bb cream,victoria secret,love
          beauty and planet shampoo,eyeliner,hair mask,face wash for oily
          skin,ordinary,toner,eyeshadow palette,cleanser,chemist at
          play,mascara,loreal professional,hair extensions,olay cream,fogg,lip
          tint,under eye cream,wax strips,shower gel,sunscreen for face,insight
          cosmetics,face foundation,hair removal machine,mac
          foundation,choker,oud perfume,makeup pouch,olaplex,body mist,wella
          shampoo,huda beauty foundation,night cream,facewash,nyx,schwarzkopf
          shampoo,blue heaven,peel off mask,best lip balm,face scrub,Cetaphil
          Face Wash,Mederma Cream,Multivitamins Tablet,Himalaya Face
          Wash,Garnier Face Wash,Hair Color For Women,Cetaphil
          Moisturizers,Ponds Face Wash,Streax Hair Serum,Nivea Body
          Lotions,Vaseline Body Lotions,Sugar Lipstick,Biotin Tablet,Aqualogica
          Sunscreen,Salicylic Acid Face Wash,Fogg Perfume,Clean And Clear Face
          Wash,Neutrogena Sunscreen,Pears Soaps,Hair Color For Men,Dry
          Cleansers,Face Serum
        </a>
      </div>
    </>
  );
};

export default Footer;
