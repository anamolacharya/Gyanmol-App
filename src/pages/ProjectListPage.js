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
    <Experience
      title="Algorizin Inc.- Nudge"
      link="https://rebrand.ly/NudgeApp"
      li1="Built “Nudge” app for alumni network with a pay-it-forward model using React-Native in agile software development."
      li2="Implemented React navigation to navigate screens and easy peasy & async storage to manage state for user profile."
      li3="Collaborated with a group of 3 developers to work on features like gamification, messaging, appointment scheduling."
    />
    <Experience
      title="Algorizin Inc.-Food Ranger"
      link="https://rebrand.ly/foodRanger"
      li1="Created an online food ordering app called Food Ranger using a self-created REST API in MERN stack where users
      will be able to search food and order food online based on the food options and restaurants available."
      li2="Used Express.js to create RESTful API."
      li3="Implemented JWT for proper user authentication and authorization."
    />

    <Experience
      title="Hunt Consolidated, Inc"
      li1="Coordinated with a team of 5 and co-operated with the project manager for research in micro-sensors in oil field."
      li2="Revamped the use of low energy micro-sensors to get on-site information on oil and gas field leading the research."
      li3="Compiled a case to introduce new micro-sensors partnering with UT Austin to reduce an OPEX for on-site supervising"
    />

    <Experience
      title="Barakah Market"
      li1="Managed $100k plus inventory every month and increased the sales by 25%
        of market by applying cost-benefit analysis."
      li2="Managed inbound/outbound relationship with store vendors, partners, and
        improved customer’s service experience."
      li3=" Operated back end of Gilbarco P.O.S system for managing sales, tracking
        inventory, and maintain sales goals every month."
    />

    <h1>Projects</h1>
    <Experience
      title="Movie Me"
      link="https://rebrand.ly/movie_me"
      li1="Led a team of five to develop a web app that lets users find streaming options for TV/shows in different countries."
      li2="Created an interactive user portal using MERN JavaScript software stack using RESTful API and Implemented features like user authorization/authentication, fetching movie details from APIs and bookmarking."
      li3="Used various public APIs- netflix, google oauth, rapidAPI, IMDb to fetch data needed to display summarized info to user."
    />
    <Experience
      title="Bang! The Dice Game"
      link="https://rebrand.ly/bangthedicegame"
      li1="Spearheaded a team of four to develop a game, implementing knowledge of OOP and data structure using Java."
      li2="Stored characters’ features in multidimensional arrays and designed game UI using JavaFX."
      li3="Used weighted graph-dijkstra’s algorithm to find friendliness and decide kill/heal players to achieve game resolution."
    />
    <Experience
      title="Health Care System"
      link="https://rebrand.ly/healthcaresystem"
      li1="Designed static model, interaction model, software architecture, database tables to develop a health care system app."
      li2="Collaborated with a team of 4 to develop software using React.js, Bootstrap framework, and Firebase for realtime DB."
      li3="Built features like portal for patients & staffs, change doctor’s appointments and payment processing."
    />
    <Experience
      title="UNO Card Game"
      li1="Developed a complete UNO Card Game collaborating with a team of five
        implementing OOP principle using Java program."
      li2="Designed deck of cards using Multi-Dimensional Array and Implemented the
        unique features of different colored cards."
      li3="Created a user interface of the game using Java FX and publish an output
        of the game in HTML file in web browser."
    />
    <Experience
      title="Image Identification using CNN"
      li1=" Collaborated with a team of three to create an Image Recognition System
        using Convolutional Neural Network."
      li2="Primarily focus on multiple CNN layers that trains a model to identify
        objects from the testing dataset with 88% accuracy."
      li3="Use of libraries like TensorFlow, Keras to perform categorical
        cross-entropy that deals with probabilistic loss in the model."
    />
    <Experience
      title="Hospital Management System"
      li1="Designed a database with all Entity types, proper ER diagram, relationship types for Hospital Management System."
      li2="Converted ER Diagram into Relational Database Schema and implemented in Relational DBMS-MySQL."
      li3="Created manual DDL codes, SQL queries, & DB tables for related departments, employees, and patients in the system."
    />
    {/* <Experience title="" link="" li1="" li2="" li3="" /> */}
  </>
);

export default ProjectListPage;
