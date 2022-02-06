import React from 'react';
import './index.scss';
import remove from '../TodoItem/imgs/remove.svg'
import check from '../TodoItem/imgs/check.svg'
import edit from '../TodoItem/imgs/edit.svg'
import mark from '../TodoItem/imgs/mark.svg'

function TodoItem(props) {
    const { data, openCheckModal, openEditModal, completeItem, removeItem, markItem} = props;
  
    return ( 

        <li className= {data.marked ? 'todo-item mark-todo-item' : 'todo-item'}>
            <div className='check-box'>
                <input
                type="checkbox" 
                onChange={()=>completeItem(data.id)}
                checked={data.completed}
                className='checkbox'
                />
            </div>
            <span  
            className='content'  
            style={{'textDecoration':data.completed ? 'line-through' : 'none'}}
            >
                {data.content}
            </span>
            <div className='btn-group'>
                {/* <button 
                className='btn btn-check'
                onClick={ () => openCheckModal(data.id) }
                >查看</button> */}
                 <img className='btn btn-mark' src={mark}  onClick={ () => markItem(data.id) } alt="mark"/>

                 <img className='btn' src={check}  onClick={ () => openCheckModal(data.id) } alt="check"/>
                 {/* <button 
                className='btn btn-edit'
                onClick={ () => openEditModal(data.id) }
                >編輯</button> */}
                <img className='btn' src={edit}   onClick={ () => openEditModal(data.id) } alt="edit"/>

                

                <img className='btn' src={remove}  onClick={ () => removeItem(data.id) } alt="remove"/>

                {/* <button 
                className='btn btn-remove'
                onClick={ () => removeItem(data.id) }
                >刪除</button> */}
            </div>

        </li>
 
     );
}

export default TodoItem;
