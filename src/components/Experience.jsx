import React from "react";

function Experience(props) {
  return (
    <div className="experience">
      <h4 className="experience_title">{props.title}</h4>
      <h5 className="experience_link">{props.link}</h5>
      <li className="li1">{props.li1}</li>
      <li className="li2">{props.li2}</li>
      <li className="li3">{props.li3}</li>
    </div>
  );
}

export default Experience;
