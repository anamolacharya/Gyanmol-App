import React from "react";
import { useHistory, useParams } from "react-router-dom";

export default function Topic(props) {
  const history = useHistory();

  function handleClick() {
    history.push("/testprep/awsccp");
    console.log("Clicked!");
  }

  return (
    <div className="topic_item" onClick={handleClick}>
      <img className="aws-ccp-img" src={props.image} />
      <div className="topic_header">
        <h5>{props.topicName}</h5>
      </div>
    </div>
  );
}
