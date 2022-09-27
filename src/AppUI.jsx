import { useContext } from "react";
import CreateTodoButton from "./components/CreateTodoButton/CreateTodoButton";
import TodoCounter from "./components/TodoCounter/TodoCounter";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoItem from "./components/TodoItem/TodoItem";
import TodoList from "./components/TodoList/TodoList";
import TodoSearch from "./components/TodoSearch/TodoSearch";
import { UserContext } from "./context/useProvider";
import Modal from "./components/modal/Modal";
import Loading from "./components/loading/Loading";
import Inicio from "./components/inicio/Inicio";

const AppUI = () => {

    const {
        loading,
        error,
        completeTodos,
        deleteTodo,
        searchTodos,
        openModal, 
    } = useContext(UserContext)

    return (
    <>
        <TodoCounter />
        <TodoSearch />
           <TodoList>
                {error && <p>Ha ocurrido un error</p>}
                {loading && <Loading/>}
                {(!loading && !searchTodos.length) && <Inicio/>}
            
                 {searchTodos.map((todo) => (
                <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onCompleted={() => completeTodos(todo.text)}
                    deleteTodo={() => deleteTodo(todo.text)} />
                ))}
           </TodoList>  

           {openModal && (
           <Modal>
                <TodoForm/>
            </Modal>
           )}   

        <CreateTodoButton />



    </>
    )
}

export default AppUI