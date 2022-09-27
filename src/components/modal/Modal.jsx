import ReactDOM from 'react-dom';
import TodoForm from '../TodoForm/TodoForm';
import './Modal.css'

const Modal = () => {
    return ReactDOM.createPortal(
    <TodoForm/>,
    document.getElementById('modal')
    )
}

export default Modal