import React, { useContext, useState } from 'react';

import TodoContext from './../context/TodoContext';

import './TodoAdd.css';

export default function TodoAdd() {
    const [text, setText] = useState('');

    const tContext = useContext(TodoContext);

    let submitHandler = (e) => {
        e.preventDefault();
        tContext.add( text )
        setText('');
    }

    let inputHandler = (e) => {
        setText( e.target.value );
    }

    return (
        <form action="" onSubmit={(e) => submitHandler(e)}>
            <input type="text" placeholder="I want to do..." onChange={(e) => inputHandler(e)} value={text}/>
            <button type="submit">add</button>
        </form>
    )
}