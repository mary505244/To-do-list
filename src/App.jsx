// import logo from './logo.svg';
import React, { useState, useCallback, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import AddInput from './components/AddInput';
import TodoItem from './components/TodoItem';
import CheckModal from './components/Modal/CheckModal';


function App() {

  const [ isInputShow, setIsInputShow ] = useState(true);
  const [ isShowCheckModal, setIsShowCheckModal ] = useState(false);
  const [ todolist, setTodolist ] = useState([]);
  const [ currentData, setCurrentData ] = useState({});


  useEffect(() => {
    const todoData = JSON.parse(localStorage.getItem('todoData') || '[]');
    setTodolist(todoData);
  }, []);

  useEffect(() => {
    localStorage.setItem('todoData',JSON.stringify(todolist))
  }, [todolist]);


  const addItem = useCallback((value) => {
    const dataItem = {
      id:new Date().getTime(),
      content:value,
      completed:false
    }
    setTodolist((todolist) => [ ...todolist, dataItem ]);
    setIsInputShow(false);
  }, []);


  const openCheckModal = useCallback((id) => {
    setCurrentData(() => todolist.filter(item => item.id === id)[0]);
    setIsShowCheckModal(true)
  }, [todolist]);


  return (
    <div className="App">
      <header className="App-header">
          <CheckModal 
          isShowCheckModal={isShowCheckModal}
          data={currentData}
          closeModal={()=>setIsShowCheckModal(false)}
          />
          <Header openInput={()=>setIsInputShow(!isInputShow)}/>
          <AddInput isInputShow={ isInputShow } addItem={addItem}/>
          <ul className="todo-list">
              {
                  todolist.map((item, index)=>{
                    return(
                      <TodoItem 
                      data={item}
                      key={index}
                      openCheckModal={ openCheckModal }/>
                    )
                  })         
              }
          </ul>
      </header>
    </div>
  );
}

export default App;
