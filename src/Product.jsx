import React from "react";
import "./index.css";
import useStore from "./Store";

const Product = ({ product }) => {
  const addItem = useStore((state) => state.addItem);

  return (
    <div className="container">
      <div className="product-container">
        <div>
          <div style={{ display: "flex" }}>
            <div>
              <div className="image">
                <div className="content">
                  <img
                    src={product.image}
                    style={{ height: "100px", width: "100px" }}
                  />
                </div>
              </div>
            </div>

            <div></div>
            <div className="details">
              <div>
                <div className="title">
                  <div className="content">
                    <li key={product.id} style={{ listStyleType: "none" }}>
                      {product.title}
                    </li>
                  </div>
                </div>
                <div className="price">
                  <div className="content">
                    <li key={product.id} style={{ listStyleType: "none" }}>
                      {product.price}
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div style={{ display: "flex" }}>
              <div className="description">
                <div className="content">{product.description}</div>
              </div>

              <div
                className="addtocart"
                onClick={() => addItem(product)}
                style={{ cursor: "pointer" }}
              >
                <div className="content">
                  <div>Add Product</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
