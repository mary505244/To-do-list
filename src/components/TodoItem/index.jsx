import React from 'react';
import './index.scss';

function TodoItem(props) {
    const { data, openCheckModal, openEditModal, completeItem, removeItem } = props;
  
    return ( 

        <li className='todo-item'>
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
                <button 
                className='btn btn-check'
                onClick={ () => openCheckModal(data.id) }
                >查看</button>
                <button 
                className='btn btn-edit'
                onClick={ () => openEditModal(data.id) }
                >編輯</button>
                <button 
                className='btn btn-remove'
                onClick={ () => removeItem(data.id) }
                >刪除</button>
            </div>

        </li>
 
     );
}

export default TodoItem;
