import React from "react";
import CreateQuestion from "./CreateQuestion";
function FormModal() {
  return (
    <>
      <div
        className="question_modal"
        style={{
          borderWidth: "2px",
          borderColor: "black",
          borderStyle: "dotted",
        }}
      >
        <h5>Enter the question input!</h5>
        <CreateQuestion />

        {/* <input type="text" id="name" placeholder="Number" />
        <br />
        <input type="text" id="name" placeholder="Title" /> <br />
        <input type="text" id="name" placeholder="Options" /> <br />
        <input type="text" id="name" placeholder="Answer" /> <br />
        <input type="text" id="name" placeholder="Explanation" />
        <button>Submit</button>
        <br /> */}
      </div>
    </>
  );
}

export default FormModal;
