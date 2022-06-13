import React, { useState } from "react";
import { nclexSet } from "../../QuestionSource/nclexSource";
import "./testSet.css";
import Timer from "../../components/Timer";

export default function Nclex() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      //alert("the answer is correct!");
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < nclexSet.questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      // alert("You finished all the question from quiz!");
      setShowScore(true);
    }
  };

  //https://www.freecodecamp.org/news/how-to-build-a-quiz-app-using-react/
  return (
    <>
      <br />
      <Timer />
      {showScore ? (
        <div className="score-section">
          <br />{" "}
          <b>
            You scored {score} out of {nclexSet.questions.length}
          </b>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/
              {nclexSet.questions.length}
            </div>
            <div className="question-text">
              {nclexSet.questions[currentQuestion].question}
            </div>
          </div>
          <div className="answer-section">
            {nclexSet.questions[currentQuestion].options.map((ansOp, index) => (
              <button
                className="ansButton"
                onClick={() => handleAnswerButtonClick(ansOp.isCorrect)}
              >
                {ansOp.value}
              </button>
            ))}
          </div>
        </>
      )}
    </>
  );
}
