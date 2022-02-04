// import logo from './logo.svg';
import React, { useState, useCallback } from 'react';
import './App.css';
import Header from '../src/components/Header';
import AddInput from '../src/components/AddInput';
import TodoItem from '../src/components/TodoItem';


function App() {

  const [ isInputShow, setIsInputShow ] = useState(true);
  const [ todolist, setTodolist ] = useState([]);

  const addItem = useCallback((value) => {
    const dataItem = {
      id:new Date().getTime(),
      content:value,
      completed:false
    }

    setTodolist((todolist) => [ ...todolist, dataItem ]);
    setIsInputShow(false);
    console.log(todolist);

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
      <Header openInput={()=>setIsInputShow(!isInputShow)}/>
      <AddInput isInputShow={ isInputShow } addItem={addItem}/>
      <ul className="todo-list">
          {
              todolist.map((item, index)=>{
                return(
                  <TodoItem 
                  data={item}
                  key={index}/>
                )
              })         
          }
      </ul>

      </header>
    </div>
  );
}

export default App;
