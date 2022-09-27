import { useContext } from 'react'
import { UserContext } from '../../context/useProvider'
import './TodoSearch.css'

const TodoSearch = () => {

    const { search, setSearch } = useContext(UserContext)

    const handleChage = (e) => {
        console.log(e.target.value)
        setSearch(e.target.value)
    }

    return (
        <div className='FormContainer'>
            <form className="InputContainer">
                <input 
                    type="text" 
                    placeholder="Buscar tarea" 
                    value={search}
                    onChange={handleChage}
                />
        </form>
        </div>
    )
}

export default TodoSearch