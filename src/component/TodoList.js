import React, { useContext } from 'react';

import './TodoList.css';

import TodoContext from './../context/TodoContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/fontawesome-free-solid';

export default function TodoList() {

    const tContect = useContext(TodoContext);
    
    let deleteHandler = (key) => {
        tContect.delete(key);
    }

    return(
        <ul>
            {
                tContect.todo.map(item => (<li key={item.key}><p>{item.text}</p><span onClick={() => deleteHandler(item.key)}><FontAwesomeIcon icon={faTimes} style={{color: '#707070'}}/></span></li>))
            }
        </ul>
    )
}