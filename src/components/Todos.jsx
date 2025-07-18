import TodoItem from './TodoItem'

const Todos = ({ Mytodos, MytoggleCompleted, MytoggleDeleted }) => { // // Jadi { Mytodos } di Todos.jsx diambil dari <Todos Mytodos={todos}/> yang ada di App.jsx, bukan dari const [todos, setTodos] secara langsung karena itu state bukan props.
    return (
        <div style={styles.container}>
            {Mytodos.map((todo) => {
                return (
                    <TodoItem key={todo.id} MytodoList={todo} MytoggleIsCompleted={MytoggleCompleted} MytoggleIsDeleted={MytoggleDeleted}/>
                )
            })}
        </div>
    )
}

const styles = {
    container: {
        width: '40%',
        margin: '0 auto',
    },
}


export default Todos