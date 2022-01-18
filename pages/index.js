import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo } from 'redux/todo'

export default function Home() {
  const [newTodo, setnewTodo] = useState('')
  const { todo } = useSelector(state => state.todo)
  const dispatch = useDispatch()

  const onSubmit = e => {
    e.preventDefault()
    dispatch(
      addTodo({
        id: Date.now(),
        text: newTodo
      })
    )
    setnewTodo('')
  }

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={newTodo} onChange={e => setnewTodo(e.target.value)} placeholder="New Todo" />
      </form>
      {todo.map(item => (
        <div key={item.id} className="flex">
          <p>{item.text}</p>
          <button
            onClick={() => dispatch(deleteTodo(item.id))}
            className="ml-2 border-2 border-red-600 px-3 py-2 rounded-sm"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}
