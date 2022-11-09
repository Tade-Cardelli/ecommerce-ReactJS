import React from "react";
import Item from "../Item";
import "./style.css";

const ItemList = ({ products }) => {
  return (
    <div className="products-grid">
      {products.map((product) => {
        return (
          
            <div key={product.id} className='product-card'>
              <h5> {product.title}</h5>
              <img
                src={product.image}
                alt={product.title}
                style={{ width: "80px" }}
              />
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
