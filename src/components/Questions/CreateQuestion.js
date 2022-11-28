import React from "react";
import { gql, useMutation } from "@apollo/client";

const CREATE_QUESTION = gql`
  mutation CreateQuestion($question: QuestionInput) {
    createQuestion(question: $question) {
      id
    }
  }
`;

export default function CreateQuestion() {
  var numberInput, titleInput;
  const [createQuestion, { data, loading, error }] =
    useMutation(CREATE_QUESTION);
  if (loading) return "Submitting...";
  if (error) return `Submissin error: ${error.message}`;
  console.log("data", data);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createQuestion({
            variables: {
              question: {
                number: numberInput.value,
                title: titleInput.value,
              },
            },
          });
          numberInput.value = "";
          titleInput.value = "";
        }}
      >
        <input
          placeholder="Number"
          ref={(node) => {
            numberInput = node;
          }}
        />
        <input
          placeholder="Title"
          ref={(node) => {
            titleInput = node;
          }}
        />
        <button type="submit"> Create Question</button>
      </form>
    </div>
  );
}
