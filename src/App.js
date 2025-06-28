import logo from './logo.svg';
import './App.css';
import Header from './Mycomponents/Header';
import Footer from './Mycomponents/Footer'; // since these both are Const and not default functions, should be in curcly braces
import Todos from './Mycomponents/Todos';
import AddTodosform from './Mycomponents/AddTodosform';
import { useEffect, useState } from 'react';
import About from './Mycomponents/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";


function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
    // json.parse converts it into a js object
  }
  // but problem with using this initTodo method with usestate to store locally is that it doesnt save all todos properly so we use UseEffect >>>
  const OnDelete= (todo)=> {console.log("I am ondelete",todo)
    // let index= todos.indexOf(todo)
    // todos.splice(index,1) 
    // removes 1 element at index in todos on clicking delete
    //but deleting this way in react doesnt work so we use UseState to make todos object to make changes to the todos objects
    setTodos(todos.filter((e)=>{
      return e!=todo;
    }))
    console.log("Deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const addTodos = (title,desc)=>{
    console.log("i am adding todo", title, desc)
    let sno;
    if(todos.length==0){sno=1}
    else{ 
    sno = todos[todos.length-1].sno +1; // The new todo added gets the next serial number
    }
    
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
      
    }
    setTodos([...todos,myTodo]) // appends myTodo at the end of the array of todos array of objects
    console.log(myTodo);
    localStorage.setItem("todos", JSON.stringify(todos))
  
  }

  // todos is an array of objects

  // let todos= [
  //   {sno: 1,
  //    title: "Go to market",
  //    desc: "Get Job1 done soon"
  //   },
  //   {sno: 2,
  //    title: "Go to mall",
  //    desc: "Get Job2 done soon"
  //   },
  //   {sno: 3,
  //    title: "Go to club",
  //    desc: "Get Job3 done soon"
  //   }
  // ]


  // const [todos, setTodos]=useState( [
  //   {sno: 1,
  //    title: "Go to market",
  //    desc: "Get Job1 done soon"
  //   },
  //   {sno: 2,
  //    title: "Go to mall",
  //    desc: "Get Job2 done soon"
  //   },
  //   {sno: 3,
  //    title: "Go to club",
  //    desc: "Get Job3 done soon"
  //   }
  // ])

  const[todos,setTodos]=useState(initTodo)
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
    
  }, [todos])
  // here useEffect comes into effect as soon as any changes is made to the "todos"(array of objects) and the effect is that it is stored locally i.e, even after refreshing the todos will remain in the browser
  

  return (            
<>
<Router>
<div className='d-flex flex-column min-vh-100'>
<Header  title= "Todo List" searchBar = {true}/> {/* the attributes inside the header are props */}
<Routes>


  <Route path="/Todos-List" element = {
    <>
    <AddTodosform addTodos={addTodos}/>
<Todos todos={todos} OnDelete={OnDelete}/>
{/* ALWAYS PASS THE PROP HERE FIRST (here todos is the prop)  */}
</>
  }
    
  >
  
          </Route>
          <Route path="/" element = {
    <>
    <AddTodosform addTodos={addTodos}/>
<Todos todos={todos} OnDelete={OnDelete}/>
{/* ALWAYS PASS THE PROP HERE FIRST (here todos is the prop)  */}
</>
  }
    
  >
  
          </Route>
  
          <Route path="/about" 
            element ={<About/>}>
            
          </Route>
          {/* <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
        </Routes>

<div className="flex-grow-1"></div>

<Footer/>
</div>
</Router>
</>
  );
}
// d-flex	Makes the container a flexbox
// flex-column	Stack children vertically
// min-vh-100	Makes container fill 100% of viewport
// flex-grow-1	Makes <main> take up remaining space
// py-3	Adds vertical padding to footer

export default App;
