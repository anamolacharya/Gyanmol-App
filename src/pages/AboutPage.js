import React from "react";
import Chart from "../components/Analytics/Chart";
import { useQuery, gql } from "@apollo/client";
import FormModal from "../components/Questions/FormModal";

const GET_QUESTIONS = gql`
  query GetAllQuestions {
    getAllQuestions {
      number
      title
      options
    }
  }
`;

function DisplayQuestions() {
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

const AboutPage = () => (
  <>
    <h1>Analytics Page</h1>

    {/* Image */}
    {/* <p>
      I am Anamol Acharya, an aspiring Full Stack Developer looking for
      full-time opportunities. I recently graduated from Texas Tech University
      with a Bachelor of Science in Computer Science. Since childhood, I was
      interested in sketching and painting where I used to play with colors and
      I was runner up in an art competition in my school. The day when I
      realized about my passion is when I came up with an idea to develop my
      portfolio website in my sophomore year where I was introduced with html
      css and js. I found web development as a new style of art where we use
      css, js, and html to make beautiful websites. Since then I have been
      heavily working in web development. During my senior year, I was exposed
      to a full stack web devp project and was really fascinated with the
      technology. The most recent project I completed is a Movie Me app that
      helps users to locate streaming links for each movie searched by the user
      in different countries. We implemented MERN Stack for the development. The
      most exciting project that I have accomplished is to create an online food
      ordering app called Food Ranger using a self-created REST API in MERN
      stack. The user will be able search food and order food online based on
      the food options available and restaurants. I am also working on my
      personal project where students/professionals can practice the
      certification tests. I would be super happy if you have any exciting
      projects that I can be a part of. I have hands-on experience in Software
      Developing using Javascript, Node.js, ReactJS, MongoDB, and Java. I have
      also experience in creating/implementing RESTful APIs and host them in AWS
      Lambda. I find myself working in problem-solving, responsive design
      principles, Agile software development, and Model View Controller (MVC)
      methods of organizing code. I am enthusiastically open to learning new
      programming languages, frameworks, and libraries and work on positions
      that get me involved in any creative and technical areas. And, about my
      hobbies, I like to play soccer and cook food when I am free and not
      working related to my profession. Did I forget to mention that I am
      competitive in Ping-Pong and have some great recipes for Potluck party! In
      the end, I would like to thank you very much for your time.
    </p> */}

    <Chart />
  </>
);

export default AboutPage;

//Mutation format
// {
//   "question": {
//     "number": "Five",
//     "title": "Asmita ko kapal",
//     "options": "1,2,3",
//     "answer": "2",
//     "explanation": "Two"
//   }
// }
