import React from "react";
import image from '../assets/image.jpg'

function Content({ product }) {
  function onClickButton() {
    alert("clicked");
  }
  return (
    <div className="content">
      <div className="content-main">
          <button className="mybutton" onClick={onClickButton}>
          <img src={image} alt={product.title} />
          </button>
      </div>
      <div className="product-info">
        <h3>{product.title}</h3>
        <p>{product.cost}</p>
      </div>
    </div>
  );
}

export default Content;
