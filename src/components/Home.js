import React from "react";

function Home(props) {
  return (
    <div>
      <div className="add-to-cart">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrxccf_eR5rTLB8MCgYddpKxfhnp6dFM4U2ciUaYzDexaGEoSR6qqxp6d_C3K7eTcex3I&usqp=CAU"
          alt="uploading"
        />
      </div>
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
          <span>Price:$1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
