import React from 'react';
import './index.scss';

function TodoItem(props) {
    const { data } = props;
  
    return ( 
        <li className='todo-item'>
            <div className='check-box'>
                <input
                type="checkbox" 
                checked={data.completed}
                />
            </div>
            <span
            className='content'
            style={{'textDecoration':data.completed ? 'line-through' : 'none'}}
            >
                {data.content}
            </span>
            <div className='btn-group'>
                <button className='btn btn-primary'>查看</button>
                <button className='btn btn-warning'>編輯</button>
                <button className='btn btn-danger'>刪除</button>
            </div>

        </li>
     );
}

export default TodoItem;
