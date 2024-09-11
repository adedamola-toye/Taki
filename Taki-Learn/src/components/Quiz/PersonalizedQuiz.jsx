import { useState } from "react";

import quizQuestions from "./quizQuestions.js";
import { Navigate } from "react-router-dom";
import Question from "./Question.jsx";

function PersonalizedQuiz() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [suggestedTrack, setSuggestedTrack] = useState("");
  const [errors, setErrors] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [proceed, setProceed] = useState(false); 

  //option- the option the user chooses
  //Is called when user selects an option for a question
  //categoryIndex = index of category that option chosen belongs to
  //questionId = ID of the question  being answered
  const handleRadioChange = (questionId, option, categoryIndex) => {
    const category = quizQuestions.find((q) => q.id === questionId)?.category[
      categoryIndex
    ];
    setSelectedAnswers((prevAns) => ({
      ...prevAns,
      [questionId]: { option, category }, //adds current options answer as an object
    }));

    
    //If user has answered this question then set the error to null while still keeping error for unanswered questions
    setErrors((prevErrors) => ({
      ...prevErrors,
      [questionId]: null,
    }));
  };

  const calculateSuggestedTrack = () => {
    const categoryCounts = {};
    Object.values(selectedAnswers).forEach((answerObj) => {
      const category = answerObj.category;
      if (category) {
        if (categoryCounts[category]) {
          categoryCounts[category] += 1;
        } else {
          categoryCounts[category] = 1;
        }
      }
    });

  
    const maxCount = Math.max(...Object.values(categoryCounts));
    const suggestedCategories = Object.keys(categoryCounts).filter(
      (cat) => categoryCounts[cat] === maxCount
    );

    return suggestedCategories.length > 1
      ? `Multiple tracks: ${suggestedCategories.join(", ")}`
      : suggestedCategories[0];
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //Prevents default behaviour of form which is reloading the page
    //This checks if all questions have been answered
    const newErrors = {};
    quizQuestions.forEach((question) => {
      if (!selectedAnswers[question.id]) {
        newErrors[question.id] = "Answer  all the questions in this quiz !!!";
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const track = calculateSuggestedTrack();
    setSuggestedTrack(track);
    setSubmitted(true);
  };

  const handleRetakeQuiz = () => {
    setSelectedAnswers({});
    setCurrentQuestion(0);
    setSubmitted(false);
  };

  const handleClickRight = function () {
    // console.log(quizQuestions.length, currentQuestion);
    if (currentQuestion === quizQuestions.length - 1) return;
    setCurrentQuestion((currentQuestion) => currentQuestion + 1);
  };
  const handleClickLeft = function () {
    // console.log(quizQuestions.length, currentQuestion);
    if (currentQuestion === 0) return;
    setCurrentQuestion((currentQuestion) => currentQuestion - 1);
  };

  const handleProceed = () => {
    console.log("Proceeding with track:", suggestedTrack);
    setProceed(true); // Set the proceed state to true
  };

  // Conditionally Navigate based on the track and proceed state
  if (proceed) {
    switch (suggestedTrack) {
      case "Frontend Web Development":
        return <Navigate to="/frontend" />;
      case "Backend Web Development":
        return <Navigate to="/backend" />;
      case "Full Stack Web Development":
        return <Navigate to="/fullstack" />;
      case "Cybersecurity":
        return <Navigate to="/cybersecurity" />;
      case "Data Science":
        return <Navigate to="/data-science" />;
      default:
        alert("No specific track available.");
        break;
    }
  }
  
  return (
    <>
  

      {!submitted ? (
        <div className="flex quiz-container">
          <div className="questions">
            <div className="quiz-head">
              <h4>Personalized Quiz</h4>
              <h4>Answer these questions so we can suggest a track for you</h4>
            </div>
            <div>
              {quizQuestions.map((question, index) => {
                if (index === currentQuestion)
                  return (
                    <Question
                      key={index}
                      question={question}
                      index={index}
                      selectedAnswers={selectedAnswers}
                      errors={errors}
                      handleRadioChange={handleRadioChange}
                    />
                  );
              })}
            </div>
            <div className="flex quiz-buttons ">
              <button onClick={handleClickLeft}>Previous</button>
              <button onClick={handleSubmit}>Submit</button>
              <button onClick={handleClickRight}>Next</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="suggested-track-section">
          <h1>Your Suggested Tech Track</h1>
          <p className="suggestedTrack">{suggestedTrack}</p>
          <div className="suggested-track-btns">
            <button onClick={handleRetakeQuiz}>Retake Quiz</button>
            <button onClick = {handleProceed}>Proceed</button>
          </div>
        </div>
      )}
    </>
  );
}



export default PersonalizedQuiz;
