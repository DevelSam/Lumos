import Modal from '../ui/Modal/Modal'
import Input from '../ui/Input/Input'
import styles from './QuestionsModal.module.css'
import Form from '../ui/Form/Form'
import { memo, useState } from 'react'
import useUserQuestion from '../../hooks/useQuestion'
import { useLocation, useNavigate } from 'react-router-dom'
const QuestionsModal = memo(function QuestiosnModal({ open, setOpen }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [error, setError] = useState('')
  const [text, setText] = useState('')
  const { addQuestion } = useUserQuestion()
  const hundleClose = () => {
    setOpen(false)
    console.log(hundleClose)
  }
  const hundleSubmit = async (e) => {
    e.preventDefault()
    if (text.length > 0) {
      const check = await addQuestion(text)
      console.log(check)
      if (!check) {
        setError('')
        navigate(location.pathname == '/profile' ? 0 : '/profile')
        hundleClose()
      }
      setError(check)
    }
  }
  return (
    <Modal c isOpen={open} onClose={hundleClose}>
      <Form className={styles.form} onSubmit={hundleSubmit} nameForm='Задать вопрос'>
        <Input
          onChange={(e) => setText(e.target.value)}
          minLength={8}
          placeholder='Вопрос'
          name='question'
          label='Ваш вопрос'
          required
        />
        <p>{error}</p>
      </Form>
    </Modal>
  )
})
export default QuestionsModal
