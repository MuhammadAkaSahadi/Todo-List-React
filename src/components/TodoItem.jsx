import { useContext } from "react"
import { TodoContext } from "../App"

const TodoItem = ({ MytodoList}) => { // Todo disini diambil dari nama props todo
    const {MytoggleIsCompleted, MytoggleIsDeleted} = useContext(TodoContext)
    
    const getTodoTitleStyle = () => {
        if (MytodoList.completed === true) {
            return { textDecoration: 'line-through' }
        } else {
            return { textDecoration: 'none' }
        }
    }

    return (
        <div style={styles.todoItem}>
            <input type="checkbox" style={styles.checkbox} onChange={() => MytoggleIsCompleted(MytodoList.id)}/>
            <p style={getTodoTitleStyle()}>
                {MytodoList.title}
            </p>
            <button style={styles.button} onClick={() => MytoggleIsDeleted(MytodoList.id)}>x</button>
        </div>
    )
}

const styles = {
    todoItem: {
        border: '2px solid #f4f4f4',
        fontSize: '24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
    },
    checkbox: {
        marginRight: '10px',
        height: '18px',
        width: '18px',
    },
    button: {
        backgroundColor: '#BB0000',
        color: '#fff',
        height: '30px',
        width: '30px',
        borderRadius: '100%',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
    },
}

export default TodoItem