import React from "react";

function User(props) {
  console.log(props);
  const { data } = props;
  return (
    <div>
      <h1>User Components</h1>
      <h3>{data.name}</h3>
      <h3>{data.age}</h3>
      <h3>{data.city}</h3>
    </div>
  );
}

export default User;
