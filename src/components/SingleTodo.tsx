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
  return(
    <form className='todos__single'>
      <span className='todos__single--text'>
        {todo.todo}
      </span>
      <div>
        <span className='icon'>
          <AiOutlineEdit/>
        </span>
        <span className='icon'>
          <MdOutlineDeleteOutline/>
        </span>
        <span className='icon'>
          <MdDone/>
        </span>
      </div>
    </form>
  )
}

export default SingleTodo