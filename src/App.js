import React, { useState } from 'react';

import TodoAdd from './component/TodoAdd';
import TodoList from './component/TodoList';

import TodoContext from './context/TodoContext';

import './App.css';

// ===============================================

export default function App() {

  const [todo, setTodo] = useState([]);

  let addTodo = (text) => {
    setTodo([
      ...todo,{
      text: text,
      key: Date.now()
    }]);
  }

  let deleteTodo = (key) => {
    let selectItem = todo.filter(item => item.key !== key);
    setTodo([ ...selectItem ]);
  }

  return (
    <TodoContext.Provider value={{
      todo: todo,
      add: addTodo.bind(this),
      delete: deleteTodo.bind(this)
    }}>
      <div className="container">
        <h2 className="text-head">TodoApp</h2>
        <TodoAdd />
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
}