import './TodoList.css'

const TodoList = ({children}) => {
    return (
        <>
        <h3 className='TitleList'>Lista de tareas</h3>
        <section className="Section">
            <ul>
                {children}
            </ul>
        </section>
        </>
    )
}

export default TodoList