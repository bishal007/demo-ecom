import React from "react";
import useStore from "./Store";
import "./index.css";

const CartItem = ({ item }) => {
  const incrementItem = useStore((state) => state.incrementItem);
  const decrementItem = useStore((state) => state.decrementItem);
  const removeItem = useStore((state) => state.removeItem);

  return (
    <div className="cart-item">
      <div className="container">
        <div className="product-container">
          <div>
            <div style={{ display: "flex" }}>
              <div>
                <div className="image">
                  <div className="content">
                    <img
                      src={item.image}
                      alt={item.title}
                      width="100"
                      height="100"
                    />
                  </div>
                </div>
              </div>

              <div></div>
              <div className="details">
                <div>
                  <div className="title">
                    <div className="content">
                      <h2>{item.title}</h2>
                    </div>
                  </div>
                  <div className="price">
                    <div className="content">
                      <p>Price: ${item.price}</p>
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
                  <div
                    className="addtocart"
                    style={{ cursor: "pointer" }}
                    onClick={() => removeItem(item.id)}
                  >
                    <div className="content">
                      <div>Remove</div>
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex" }}>
                  <div>
                    <div
                      className="addtocart"
                      style={{ cursor: "pointer" }}
                      onClick={() => incrementItem(item.id)}
                    >
                      <div className="content">
                        {" "}
                        <div>+</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="addtocart" style={{ cursor: "pointer" }}>
                      <div className="content">
                        <span>{item.count}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="addtocart"
                      style={{ cursor: "pointer" }}
                      onClick={() => decrementItem(item.id)}
                    >
                      <div className="content">
                        <div>-</div>
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    //   </div>
    // </div>
  );
};

export default CartItem;
