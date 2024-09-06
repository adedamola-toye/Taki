import PropTypes from 'prop-types'

//Ensure correct types of props are passed
Question.propTypes = {
  //question must be an object with the following properties
    question: PropTypes.shape({
      id: PropTypes.number.isRequired,
      question: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
    selectedAnswers: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleRadioChange: PropTypes.func.isRequired,
  };
  
function Question({
    question,
    index,
    selectedAnswers,
    errors,
    handleRadioChange,
  }) {
    return (
      <div key={question.id} className="question-cont">
        <p className="question">{`${index + 1}. ${question.question}`}</p>
        <ul className="options">
          {question.options.map((option, optionIndex) => (
            <li key={optionIndex}>
              <label>
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={option}
                  checked={selectedAnswers[question.id]?.option === option}
                  onChange={() =>
                    handleRadioChange(question.id, option, optionIndex)
                  }
                />
                {option}
              </label>
            </li>
          ))}
        </ul>
        {errors[question.id] && <p className="error">{errors[question.id]}</p>}
      </div>
    );
  }

  export default Question