import Modal from '../ui/Modal/Modal'
import Input from '../ui/Input/Input'
import Form from '../ui/Form/Form'
import { memo } from 'react'
const QuestionsModal = memo(function questionalsmodal({ open, setOpen }) {
  const hundleClose = () => {
    setOpen(false)
    console.log(hundleClose)
  }
  return (
    <Modal isOpen={open} onClose={hundleClose}>
      <Form nameForm='Задать вопрос'>
        <Input placeholder='Имя' name='name' label='Имя' required />
        <Input minLength={8} placeholder='Вопрос' name='question' label='Ваш вопрос' required />
      </Form>
    </Modal>
  )
})
export default QuestionsModal
