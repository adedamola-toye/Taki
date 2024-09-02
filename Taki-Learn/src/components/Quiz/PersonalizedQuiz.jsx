import {db} from './firebaseConfig2.js'
import Navbar from "../homePage/navbar.jsx"
import {useState, useEffect} from 'react'
import {collection, getDocs} from 'firebase/firestore'

function PersonalizedQuiz(){
    const [questions, setQuestions] = useState([])
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const questionsCollectionRef = collection(db, "Quiz Questions")

    const getQuestions = async() => {
        try{
            const data = await getDocs(questionsCollectionRef)
        const questionsList = data.docs.map(doc => ({id: doc.id, ...doc.data()}));
        setQuestions(questionsList)
    }catch(error){
        console.log(error)
    }
}

    //Make the getQuestions run immediately Quiz page loads
    useEffect(() => {
        getQuestions();
    });

    const handleRadioChange = (questionId, option) =>{
        selectedAnswers(prevAns => ({
            ...prevAns,
            [questionId] : option
        }))
        console.log(selectedAnswers)
    }

    return (
        <>
            <Navbar />
            <div className="questions">
                {questions.map((question) => (
                    <div key={question.id}>
                        <p>{question.question}</p>
                        <ul className='options'>
                            {question.options.map((option, optionIndex) => (
                                <li key={optionIndex}>
                                    <label>
                                        <input
                                            type="radio"
                                            name={`question-${question.id}`} 
                                            value={option}
                                            checked={selectedAnswers[question.id] === option}
                                            onChange={() => handleRadioChange(question.id, option)}
                                        />
                                        {option} 
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    );
}



export default PersonalizedQuiz