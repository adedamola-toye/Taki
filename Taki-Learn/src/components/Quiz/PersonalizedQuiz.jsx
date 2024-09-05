import { useState } from "react";
import Navbar from "../homePage/navbar.jsx";
import quizQuestions from "./quisQuestions.js";

function PersonalizedQuiz() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [suggestedTrack, setSuggestedTrack] = useState("");
  const [errors, setErrors] = useState({});

  const handleRadioChange = (questionId, option, categoryIndex) => {
    const category = quizQuestions.find((q) => q.id === questionId)?.category[
      categoryIndex
    ];
    setSelectedAnswers((prevAns) => ({
      ...prevAns,
      [questionId]: { option, category },
    }));

 
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
    e.preventDefault();

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
    setSubmitted(false);
  };

  return (
    <>
      <Navbar />

      {!submitted ? (
        <div className="questions">
          <h1>Personalized Quiz</h1>
          <h2>Answer these questions so we can suggest a track for you</h2>

          {quizQuestions.map((question, index) => (
            <div key={question.id}>
              <p className="question">{`${index + 1}. ${question.question}`}</p>
              <ul className="options">
                {question.options.map((option, optionIndex) => (
                  <li key={optionIndex}>
                    <label>
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        value={option}
                        checked={
                          selectedAnswers[question.id]?.option === option
                        }
                        onChange={() =>
                          handleRadioChange(question.id, option, optionIndex)
                        }
                      />
                      {option}
                    </label>
                  </li>
                ))}
              </ul>
              {errors[question.id] && (
                <p className="error">{errors[question.id]}</p>
              )}
            </div>
          ))}

          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <div className="suggested-track-section">
          <h1>Your Suggested Tech Track</h1>
          <p className="suggestedTrack">{suggestedTrack}</p>
          <div className="suggested-track-btns">
            <button onClick={handleRetakeQuiz}>Retake Quiz</button>
            <button>Proceed</button>
          </div>
        </div>
      )}
    </>
  );
}

export default PersonalizedQuiz;
