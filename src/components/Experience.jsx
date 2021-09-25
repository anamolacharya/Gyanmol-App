import React from "react";

function Experience(props) {
  return (
    <div className="experience">
      <h4 className="experience_title">{props.title}</h4>
      <h5 className="experience_link">{props.link}</h5>
      <p className="experience_descrption">{props.description}</p>
    </div>
  );
}

export default Experience;
