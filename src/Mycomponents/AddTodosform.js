import React, { useState } from 'react'


const AddTodosform = (props) => {
  const [title, setTitle] = useState("")
  const[desc,setDesc] = useState("")

  const submit=(e)=>{
    e.preventDefault(); // this prevents the page from reloading after submitting the form
    if(!title||!desc ){
      //if no title or no desc
      alert("Title or Description cannot be blank")
    }
   else{ 
    props.addTodos(title,desc)
    setTitle("");
    setDesc(""); // this is done to make the title and description blanks empty after submission

   }
  }
  return (
//     What’s Happening Here?
// onChange is a React event handler that triggers when the input value changes.

// e.target.value extracts the current value of the input field.

// setTitle is a state-updating function from useState (e.g., const [title, setTitle] = useState("")).


   
    <div className='container my-3'>
       <h3>Add Todos</h3>
      <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Todo Title</label>
    <input type="text"  value ={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Todo Description</label>
    <input type="text" value ={desc} onChange={(e)=>{setDesc(e.target.value)}}className="form-control" id="desc"/>
  </div>
  <button type="submit" className="btn btn-primary btn-sm btn-success">Add Todo</button>
</form>
    </div>
  )
}

export default AddTodosform

