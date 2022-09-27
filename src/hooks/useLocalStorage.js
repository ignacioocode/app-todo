import { useEffect, useState } from "react";

const useLocalStorage = (itemName, initialState) => {
    
    const [todos, setTodos] = useState(initialState)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            try {
                // LocalStorage
                const localStorageTodos = localStorage.getItem(itemName);

                let parsedTodos; //Comienza como array vacio

                if (!localStorageTodos){ 
                    // Si no hay nada se agrega un array vacio
                    parsedTodos = localStorage.setItem(itemName, JSON.stringify(initialState))
                    parsedTodos = []
                }else{
                    // Se iguala a lo que hay en localStorage
                    parsedTodos = JSON.parse(localStorageTodos)
                }
                setTodos(parsedTodos)
                setLoading(false)                
                }
                catch (error){
                    setError(error)
                }
        }, 1000)
    })

    // LocalStorage Para compleados y eliminados
    const saveTodos = (newTodos) => {
        try {
            const stringifyTodos = JSON.stringify(newTodos);
            localStorage.setItem(itemName, stringifyTodos);
            setTodos(newTodos)
        }
        catch(error){
            setError(error)
        }
      }

    return {todos, loading, error, saveTodos}
}

export default useLocalStorage