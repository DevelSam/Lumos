import { useEffect } from 'react'
import useUserQuestion from '../../hooks/useQuestion'
export default function UserQuestions() {
  const { getQuestions, questions, deleteQuestion, l } = useUserQuestion()
  useEffect(() => {
    getQuestions()
  }, [])
  return (
    <div>
      {questions.length > 0 ? (
        questions.map((question) => (
          <ul key={question._id}>
            <li>
              <span>{question.questionText}</span>
              <span>{question.createAt}</span>
              <button onClick={() => deleteQuestion(question._id)} className={` button-watch `}>
                удалить
              </button>
            </li>
          </ul>
        ))
      ) : (
        <p>У пользователя нет вопросов</p>
      )}
    </div>
  )
}
