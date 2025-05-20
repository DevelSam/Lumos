import { useEffect } from 'react'
import useUserQuestion from '../../hooks/useQuestion'
import styles from './UserQuestions.module.css'
export default function UserQuestions() {
  const { getQuestions, questions, deleteQuestion } = useUserQuestion()
  useEffect(() => {
    getQuestions()
  }, [])
  return (
    <>
      <h1 className={styles.title}>Ваши вопросы</h1>
      {questions.length > 0 ? (
        questions.map((question) => (
          <ul className={styles.list} key={question._id}>
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
        <p>У вас нет вопросов</p>
      )}
    </>
  )
}
