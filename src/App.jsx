//設置最愛後置頂
//刪除時有動畫

import React, { useState, useCallback, useEffect } from 'react';
// import ReactCSSTransitionGroup from 'react-transition-group';
import './App.css';
import Today from './components/Today';
import Header from './components/Header';
import AddInput from './components/AddInput';
import TodoItem from './components/TodoItem';
import CheckModal from './components/Modal/CheckModal';
import EditModal from './components/Modal/EditModal';
import NoDataTip from './components/NoDataTip';

function App() {

  const [ isInputShow, setIsInputShow ] = useState(true);
  const [ isShowCheckModal, setIsShowCheckModal ] = useState(false);
  const [ isShowEditModal, setIsShowEditModal ] = useState(false);
  const [ todolist, setTodolist ] = useState([]);
  const [ currentData, setCurrentData ] = useState({});
  const [ completedCount, setCompletedCount ] = useState(0);
  const [ totalCount, setTotalCount ] = useState(0);


  useEffect(() => {
    const todoData = JSON.parse(localStorage.getItem('todoData') || '[]');
    setTodolist(todoData);
  }, []);

  useEffect(() => {
    localStorage.setItem('todoData',JSON.stringify(todolist))
  }, [todolist]);
  

  useEffect(() => {
    const totalCount = todolist.length;
    setTotalCount(totalCount);

    const completedItem = todolist.filter(item=>{
      return item.completed === true
    })
    setCompletedCount(completedItem.length);

  }, [todolist]);


  // useEffect(() => {
  //   const markedItem = todolist.filter(item => item.marked === true);
  //   const unmarkedItem = todolist.filter(item => item.marked === false);
  //   setTodolist([ ...markedItem, ...unmarkedItem ]);

  //   console.log(markedItem)
  //   console.log(unmarkedItem)
  // }, []);


  const addItem = useCallback((value) => {
    const dataItem = {
      id:new Date().getTime(),
      content:value,
      completed:false,
      marked:false
    }
    setTodolist((todolist) => [ ...todolist, dataItem ]);
    setIsInputShow(false);
  }, []);


  const completeItem = useCallback((id) => {
    setTodolist((todolist)=>
      todolist.map((item, index)=>{
        if(item.id === id){
          item.completed = !item.completed;
        }
        return item;
      })
    )
  }, []);


  const removeItem = useCallback((id) => {
    setTodolist((todolist)=>
      todolist.filter(item=>item.id !== id));
  }, [])

  const markItem = useCallback((id) => {
    setTodolist((todolist)=>
      todolist.map((item, index)=>{
        if(item.id === id){
          item.marked = !item.marked;
        }
        return item;
      })
    )
  }, []);


  function _setCurrentData(todolist, id){
    setCurrentData(() => todolist.filter(item => item.id === id)[0]);
  }


  const openCheckModal = useCallback((id) => {
    _setCurrentData(todolist, id);
    setIsShowCheckModal(true);
  }, [todolist]);


  const openEditModal = useCallback((id) => {
    _setCurrentData(todolist, id);
    setIsShowEditModal(true);
  }, [todolist]);


  const submitEdit = useCallback((newData, id) => {
    setTodolist((todolist)=>
      todolist.map((item, index)=>{
        if(item.id === id){
          item = newData;
        }
        return item;
      })
    )
    setIsShowEditModal(false);
  },[])


  


  return (
    <div className="App">
      <header className="App-header">
          <CheckModal 
          isShowCheckModal={isShowCheckModal}
          data={currentData}
          closeModal={()=>setIsShowCheckModal(false)}
          /> 
          <EditModal 
          isShowEditModal={isShowEditModal}
          data={currentData}
          submitEdit={submitEdit}
          closeModal={()=>setIsShowEditModal(false)}
          /> 
          <Today/>
          <Header openInput={()=>setIsInputShow(!isInputShow)} completedCount={completedCount} totalCount={totalCount}/>
          <AddInput isInputShow={ isInputShow } addItem={addItem}/>
          
          {
            !todolist || todolist.length === 0 ?
              (<NoDataTip/>)
            : 
              <ul className="todo-list"> 
                 {
                    todolist.map((item, index)=>{
                      return(
                        <TodoItem 
                        data={item}
                        key={index}
                        openCheckModal={ openCheckModal }
                        openEditModal={ openEditModal }
                        completeItem={ completeItem }
                        removeItem={removeItem}
                        markItem={markItem}
                        />
                      )
                    })         
                 }
              </ul>
          }
          
      </header>
      
    </div>
  );
}

export default App;
