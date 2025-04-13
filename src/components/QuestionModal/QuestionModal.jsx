import Modal from '../Modal/Modal'
import Input from '../Input/Input'
import Form from '../Form/Form'
const QuestionsModal = ({ open, setOpen }) => {
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
}
export default QuestionsModal
