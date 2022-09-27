import { useContext, useState } from "react"
import { UserContext } from "../../context/useProvider"

const TodoForm = () => {

    const [inputValue, setInputValue] = useState('')

    const {addTodos, setOpenModal} = useContext(UserContext)

    const cancelSubmit = () => {
        setOpenModal(false)
    }

    const onChange = (e) => {
        setInputValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if(!inputValue.trim()){
            setVacio(true)
            setCaracteres(false)
            return
        }
        setVacio(false)
        if(inputValue.length > 50){
            setCaracteres(true)
            return
        }
        setCaracteres(false)
        addTodos(inputValue)
        setOpenModal(false)
    }

    const [caracteres, setCaracteres] = useState(false)
    const [vacio, setVacio] = useState(false)

    return (
        <div className='containerModal'>
            <form onSubmit={onSubmit}>
                <label htmlFor="">¡Agrega una nueva<br/> tarea!</label>
                {caracteres && (<p className="validacion">¡Máximo 50 caracteres!</p>)}
                {vacio && (<p className="validacion">¡Debe escribir algo!</p>)}
                <textarea 
                    placeholder="Escribe aquí"
                    onChange={onChange}
                />
                <div>
                    <button type="button" onClick={cancelSubmit}>Cancelar</button>
                    <button type="Submit">Agregar</button>
                </div>
            </form>
        </div>
    )
}

export default TodoForm