import { useState } from 'react'
import Todos from './components/Todos.jsx';
import TodoForm from './components/TodoForm.jsx';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false
    },
    {
      id: 2,
      title:'Have lunch with Guru Domba',
      completed: false
    },
    {
      id: 3,
      title:'Study React with Ninja Ken',
      completed: false
    } 
  ])

  const toggleCompleted = (todoId) => { // 'todoId' adalah ID dari todo yang ingin diubah statusnya. ID ini akan dikirim dari komponen 'TodoItem' ketika checkbox diklik
    const updatedTodos = todos.map((todo) => { // Iterasi melalui setiap todo dalam array
      if (todo.id === todoId) { // Cek apakah ID todo saat ini sama dengan ID yang dikirim
        todo.completed = !todo.completed
        // Jika false → menjadi true (coret/selesai)
        // Jika true → menjadi false
      }
      return todo // Kembalikan todo (baik yang diubah maupun yang tidak)
    })
    setTodos(updatedTodos) // Mengupdate state todos dengan array yang sudah dimodifikasi. Ini akan memicu re-render komponen
  }

  const toggleDeleted = (todoId) => {
    const updatedTodos = todos.filter((todo) => { // Membuat array baru yang berisi semua todo KECUALI yang memiliki ID yang sama dengan todoId
      return todo.id !== todoId // Hanya keep todo yang ID-nya TIDAK sama dengan yang ingin dihapus
      // Filter akan cek setiap todo:
      // todo.id: 1 !== 2 → true (keep)
      // todo.id: 2 !== 2 → false (remove)
      // todo.id: 3 !== 2 → true (keep)
    })
    setTodos(updatedTodos)
  }

  const addTodo = (todoTitle) => {
    if (todoTitle === '') {
      return // validasi jika ternyata tidak ada yang diketikkan sebagai title
    }

    const newTodo = { // Buat data newTodo menggunakan nilai dari todoTitle
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    }
  
    const updateTodos = todos.concat(newTodo)
    setTodos(updateTodos)
  }


  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.title}>
          My Todo List
        </h1>
        <Todos Mytodos={todos} MytoggleCompleted={toggleCompleted} MytoggleDeleted={toggleDeleted}/>
        <TodoForm addTodo={addTodo}/>
      </div>
    </>
  )
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '12px',
  },
  title: {
    fontSize: '36px',
  },
}

export default App
