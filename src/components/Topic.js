import React from "react";

export default function Topic(props) {
  return (
    <div className="topic_item">
      <img className="aws-ccp-img" src={props.image} />
      <div className="topic_header">
        <h5>{props.topicName}</h5>
      </div>
    </div>
  );
}
