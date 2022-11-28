import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_QUESTIONS = gql`
  query GetAllQuestions {
    getAllQuestions {
      number
      title
      options
    }
  }
`;

export default function DisplayQuestions() {
  const { loading, error, data } = useQuery(GET_QUESTIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error ayo! </p>;
  console.log(data.getAllQuestions);
  // return <p>Data parsed</p>;
  return data.getAllQuestions.map((e, i) => (
    <div key={i + 1}>
      {" "}
      <h3>
        Question {i + 1}: {e.title}
      </h3>
      <p>Option: {e.options}</p>
    </div>
  ));
}
