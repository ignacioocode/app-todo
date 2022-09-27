import './TodoItem.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleCheck, faXmark} from '@fortawesome/free-solid-svg-icons'

const TodoItem = ({completed, onCompleted, deleteTodo, text}) => {

    return (
        <li>
            <span 
                className={`SpanCheck ${completed && 'SpanChecked'}`}
                onClick={onCompleted}
            ><FontAwesomeIcon icon={faCircleCheck}/></span>
            <p className={`${completed && 'textoTachado'}`}>{text}</p>
            <span 
                className='SpanExit'
                onClick={deleteTodo}
            ><FontAwesomeIcon icon={faXmark}/></span>
        </li>
    )
}

export default TodoItem