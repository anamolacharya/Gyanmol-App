import React from "react";

export default function Banner(props) {
  return (
    <div className="Banner">
      <img className="banner-img" src={props.image} />
    </div>
  );
}
