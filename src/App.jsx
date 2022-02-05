// import logo from './logo.svg';
import React, { useState, useCallback, useEffect } from 'react';
import './App.css';
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
          {/* <CheckModal 
          isShowCheckModal={isShowCheckModal}
          data={currentData}
          closeModal={()=>setIsShowCheckModal(false)}
          />
          <EditModal 
          isShowEditModal={isShowEditModal}
          data={currentData}
          submitEdit={submitEdit}
          /> */}
          <Header openInput={()=>setIsInputShow(!isInputShow)}/>
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
