const TodoItem = ({ Mytodo }) => { // Todo disini diambil dari nama props todo
    return (
        <div style={styles.todoItem}>
            <p>
                {Mytodo.title}
            </p>
        </div>
    )
}

const styles = {
    todoItem: {
        border: '2px solid #f4f4f4',
        fontSize: '24px',
    },
}

export default TodoItem