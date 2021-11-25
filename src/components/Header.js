import React from "react";

function Header(props) {
  console.log("props", props.data);
  return (
    <div>
      <div className="add-to-cart">
        <span className="cart-count">{props.data.length}</span>
        <h3 className="cart-name">Cart</h3>
        <img
          src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png"
          alt="uploading"
        />
      </div>
    </div>
  );
}

export default Header;
