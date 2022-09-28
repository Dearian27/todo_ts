import React from 'react'
import {Todo} from '../model'
import {AiOutlineEdit} from 'react-icons/ai'
import {MdOutlineDeleteOutline, MdDone} from 'react-icons/md'

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo:React.FC<Props> = ({todo, todos, setTodos}) => {

  const handleDelete = (id:number) => {
    
  }

  const handleDone = (id:number) => {
    setTodos(
      todos.map(todo =>
          todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    )
  }

  return(
    <form className='todos__single'>
      {
        todo.isDone ? (
          <s className='todos__single--text'> {todo.todo} </s>
        ): (
          <span className='todos__single--text'> {todo.todo} </span>
        )
      }
      
      <div>
        <span className='icon'>
          <AiOutlineEdit/>
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