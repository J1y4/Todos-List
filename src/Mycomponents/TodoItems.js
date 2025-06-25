import React from 'react'

// todo is a prop of TodoItems defined in Todos.js
// Pass the props (todo and OnDelete as one argument in curly braces)
const TodoItems = ({todo,OnDelete}) => {
  return (
    <div className='py-3 px-3 my-3 mx-4 border-bottom border-danger-subtle'>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className='btn btn-danger btn-sm' onClick={()=>{OnDelete(todo)}}>Delete</button>
      {/* you should not CALL Ondelete function inside onClick, instead PASS the function using arrow ()=> */}
    </div>
  )
}

export default TodoItems
