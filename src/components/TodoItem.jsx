const TodoItem = ({ MytodoList, MytoggleIsCompleted }) => { // Todo disini diambil dari nama props todo
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
        </div>
    )
}

const styles = {
    todoItem: {
        border: '2px solid #f4f4f4',
        fontSize: '24px',
    },
    checkbox: {
    marginRight: '10px',
    height: '18px',
    width: '18px',
    },
}

export default TodoItem