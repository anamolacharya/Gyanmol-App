import React from "react";
import { Link } from "react-router-dom";
import Experience from "../components/Experience";

// class RedirectPage extends React.Component {
//     componentDidMount(){
//       window.location.replace('https://www.google.com')
//     }
//   }
const ProjectListPage = () => (
  <>
    <h1>Experience</h1>
    <Experience title="Algorizin" link="github.com" description="Hello" />

    <ul>
      <b>Nudge</b>
      <li>
        Worked in front end development team to create Nudge app using
        React-Native in Agile Software Development.
      </li>
      <li>
        Collaborating with group of 3 interns and completing tasks in weekly
        sprint to make better UI for the Nudge app.
      </li>
    </ul>
    <ul>
      <b>Algorizin</b>
      <li>
        Created an online food ordering app called Food Ranger using a
        self-created REST API in MERN stack.
      </li>
      <li>
        User will be able to search food and order food online based on the food
        options and restaurants available.
      </li>
      <li>
        Use of Express.js to create RESTful API and JWT for proper user
        authentication and authorization.
      </li>
    </ul>
    <ul>
      <b>Hunt Consolidated, Inc</b>
      <li>
        Coordinated with a team of 5 leading co-operating with the project
        manager for a research in Micro-sensors in Oil Field.
      </li>
      <li>
        Revamped the use of Low Energy Micro-Sensors to get on-site information
        on Oil and Gas field leading the research.
      </li>
      <li>
        Compiled a case to introduce New Micro-Sensors partnering with UT Austin
        to reduce an OPEX for on-site supervising.
      </li>
    </ul>
    <ul>
      <b>Barakah Market</b>
      <li>
        Managed $100k plus inventory every month and increased the sales by 25%
        of market by applying cost-benefit analysis.
      </li>
      <li>
        Managed inbound/outbound relationship with store vendors, partners, and
        improved customer’s service experience.
      </li>
      <li>
        Operated back end of Gilbarco P.O.S system for managing sales, tracking
        inventory, and maintain sales goals every month.
      </li>
    </ul>

    <h1>Projects</h1>
    <ul>
      <b>Movie Me</b>
      <li>
        Orchestrated a team of five to develop a web application which helps
        users find detailed streaming options for TV/Shows.
      </li>
      <li>
        Use of various public APIs like Netflix, Google Sign-In, RapidAPI, IMDb
        to fetch data needed to display proper info for user.
      </li>
      <li>
        Creating an interactive user portal using MERN JavaScript software stack
        using RESTful API to create dynamic Webapp.
      </li>
    </ul>
    <ul>
      <b>Health Care System</b>
      <li>
        Designed static, interaction model, software architecture, database
        tables to develop a Health Care System Software.
      </li>
      <li>
        Collaborated with a team of four to develop software using React.js,
        Bootstrap framework, and Firebase for Realtime DB.
      </li>
      <li>
        Demonstrated features like creating patient/staff personal Portal,
        make/change doctor’s Appointment, view daily Report.
      </li>
    </ul>
    <ul>
      <b>Image Identification using CNN</b>
      <li>
        Collaborated with a team of three to create an Image Recognition System
        using Convolutional Neural Network.
      </li>
      <li>
        Primarily focus on multiple CNN layers that trains a model to identify
        objects from the testing dataset with 88% accuracy.
      </li>
      <li>
        Use of libraries like TensorFlow, Keras to perform categorical
        cross-entropy that deals with probabilistic loss in the model.
      </li>
    </ul>
    <ul>
      <b>Bang! The Dice Game</b>
      <li>
        Spearheaded a team of four to develop a Bang! The Dice Game implementing
        OOP and Data Structure using Java program.
      </li>
      <li>
        Implemented weighted graph-Dijkstra’s algorithm to find friendliness
        among players and decide to kill/heal opponents.
      </li>
      <li>
        Designed a user interface using Java FX for dice resolution and rolling
        dice to each player with their respective roles.
      </li>
    </ul>
    <ul>
      <b>UNO Card Game</b>
      <li>
        Developed a complete UNO Card Game collaborating with a team of five
        implementing OOP principle using Java program.
      </li>
      <li>
        Designed deck of cards using Multi-Dimensional Array and Implemented the
        unique features of different colored cards.
      </li>
      <li>
        Created a user interface of the game using Java FX and publish an output
        of the game in HTML file in web browser.
      </li>
    </ul>
  </>
);

export default ProjectListPage;
