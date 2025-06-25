import React from 'react'
import App from '../App'
import TodoItems from './TodoItems'


const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className='text-center shadow-sm p-3 mb-5 bg-body-tertiary rounded'>Todos List</h3>   
      {props.todos.length==0?"No todos to display": 
      props.todos.map((todo)=>{
        return <TodoItems todo={todo} key={todo.sno} OnDelete={props.OnDelete}/>
      })}
      {/* Mapping means each element of the array(here each element is a "todo" is passed as parameter/argument and a function/ new array is returned) */}
      {/* first object of todos in app.js */}
    </div>
  )
}

export default Todos
// but if you are trying to do " export cons Todos=()) =>{ }" then you have to enclose the todos in curly braces while importing in app.js and no need of export default at last