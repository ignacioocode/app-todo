import { useContext } from 'react';
import { UserContext } from '../../context/useProvider';
import './TodoCounter.css';

const TodoCounter = () => {
    const {totalTodos, completedTodos,} = useContext(UserContext)
    return (
        <h2 className="TodoCounter">Has completado<br/> {completedTodos} de {totalTodos} tareas</h2>
    )
}

export default TodoCounter