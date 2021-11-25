import React from "react";

function Home(props) {
  console.log("props", props.data);
  return (
    <div>
      <h1>Home Components</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png"
            alt="uploading"
          />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price:$5.00</span>
        </div>
        <div className="btn-wrapper item">
          <button className="add-btn"
            onClick={() =>
              props.addToCartHandler({ price: 1000, name: "I-Phone 13pro" })
            }
          >
            Add To Cart
          </button>

          <button className="remove-btn"
            onClick={() =>
              props.removeToCartHandler({ })
            }
          >
            Remove To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
