import React from "react";
import { cartData } from "../../utils/aboutData";

const Cards = () => {
  console.log(cartData);
  return (
    <section>
      <div>
        <h5>What We Offer</h5>
        <div>
          {cartData.map((cart, index) => {
            return (
              <div>
                <div>
                  <img src={cart.icon} alt="" />
                </div>
                <h5> {cart.text} </h5>
                <p>{cart.explanation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Cards;
