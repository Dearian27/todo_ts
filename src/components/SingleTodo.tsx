import React, {useState} from 'react'
import {Todo} from '../model'
import {AiOutlineEdit} from 'react-icons/ai'
import {MdOutlineDeleteOutline, MdDone} from 'react-icons/md'

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo:React.FC<Props> = ({todo, todos, setTodos}) => {
  
  const [edit, setEdit] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<string>(todo.todo)

  const handleDelete = (id:number) => {
    setTodos(
      todos.filter(todo => todo.id!== id)
    )
  }

  const handleDone = (id:number) => {
    setTodos(
      todos.map(todo =>
          todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    )
  }
  const handleEdit = () => {

  }
  return(
    <form className='todos__single'>
      {
        edit ? (
          <input type="text"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className='todos__single--test'
          />
        ): todo.isDone ? (
          <s className='todos__single--text'> {todo.todo} </s>
        ): (
          <span className='todos__single--text'> {todo.todo} </span>
        )
      }
      
      <div>
        <span className='icon'>
          <AiOutlineEdit onClick={() => {
            if(!edit && !todo.isDone) {
              setEdit(!edit)
              handleEdit()
            }
            
            }}/>
        </span>
        <span className='icon' onClick={() => handleDelete(todo.id)}>
          <MdOutlineDeleteOutline/>
        </span>
        <span className='icon' onClick={() => handleDone(todo.id)}>
          <MdDone/>
        </span>
      </div>
    </form>
  )
}

export default SingleTodo