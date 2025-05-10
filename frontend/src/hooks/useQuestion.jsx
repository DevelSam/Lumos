import { useCallback, useState } from 'react'

const useUserQuestion = () => {
  const userToken = localStorage.getItem('user')
  const [questions, setQuestions] = useState([])
  const [loadingQuestions, setLoadingQuestions] = useState(false)
  const addQuestion = async (text) => {
    setLoadingQuestions(true)
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/user/questions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${userToken}` },
        body: JSON.stringify({ questionText: text }),
      })
      const data = await response.json()
      if (!response.ok) {
        return data.message
      }
      await getQuestions()
    } catch (e) {
      console.error(e)
    } finally {
      setLoadingQuestions(false)
    }
  }

  const deleteQuestion = async (id) => {
    setLoadingQuestions(true)
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/user/questions`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify({ questionId: id }),
      })
      setQuestions(questions.filter((q) => q._id !== id))

      const data = await response.json()
      return data.message
    } catch (e) {
      console.error(e)
    } finally {
      setLoadingQuestions(false)
    }
  }

  const getQuestions = useCallback(async () => {
    setLoadingQuestions(true)
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/user/questions`, {
        headers: {
          'Content-Type': 'application/json charset=utf-8',
          Authorization: `Bearer ${userToken}`,
        },
      })
      const data = await response.json()
      if (response.ok) {
        setQuestions(data)
      } else {
        return data.message
      }
    } catch (e) {
      console.log(e)
    } finally {
      setLoadingQuestions(false)
    }
  }, [userToken])

  return { addQuestion, deleteQuestion, getQuestions, questions, loadingQuestions }
}
export default useUserQuestion
