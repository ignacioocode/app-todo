import { useContext } from 'react'
import { UserContext } from '../../context/useProvider'
import './CreateTodoButton.css'

const CreateTodoButton = () => {
    const {setOpenModal, setSearch} = useContext(UserContext)

    const mostrarModal = () => {
        setOpenModal(true)
        setSearch('')
    }

    return (
        <button 
            className="Button"
            onClick={mostrarModal}
        >+</button>
    )
}

export default CreateTodoButton