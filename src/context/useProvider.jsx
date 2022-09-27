import { useState } from "react";
import { createContext } from "react";
import useLocalStorage from '../hooks/useLocalStorage'

export const UserContext = createContext()

const UseProvider = ({children}) => {

    const [openModal, setOpenModal] = useState(false)

    const {todos, loading, error, saveTodos} = useLocalStorage('TODOS_V1', [])

    // Cantidad y Todos Completados
    const completedTodos = todos.filter(todo => todo.completed).length
    const totalTodos = todos.length

    // Buscar Todos
    const [search, setSearch] = useState('')


    let searchTodos = []

    if(!searchTodos >= 1){ // Si no hay nada escrito en el input es igual a los Todos existentes
        searchTodos = todos
    }else{    // Si hay algo escrito se filtra un array con lo que coincida con el valor del input
        searchTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase() // Se convierte el texto del todo en minuscula
        const searchText = search.toLowerCase() // Se convierte el valor del input en minuscula
        return todoText.includes(searchText) // Retorna un array con lo que coincida con el input
        })
    }


    const addTodos = (text) => {
        const newTodos = [...todos] // Se clona el array de todos
        newTodos.push({
            text: text,
            completed: false
        }) 
        saveTodos(newTodos) // se guarda el nuevo array actualizado
    }

    // Completar y Eliminar Todos
    const completeTodos = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text) // Coneguir el indice del todo SELECCIONADO
        const newTodos = [...todos] // Se clona el array de todos
        newTodos[todoIndex].completed = true // Acceder al todo que coincida con el texto y se cambia a true
        saveTodos(newTodos) // se guarda el nuevo array actualizado
    }

    const deleteTodo = (text) => {
        let onDelete = []
        onDelete = todos.filter(todo => todo.text !== text) // Se filtra un nuevo array con todos los todos que NOO coincidan con el texto
        saveTodos(onDelete) // Se gurda el nuevo array actualizado
    }

    return (
        <UserContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            search,
            setSearch,
            completeTodos,
            deleteTodo,
            searchTodos,
            openModal,
            setOpenModal,
            addTodos,
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UseProvider