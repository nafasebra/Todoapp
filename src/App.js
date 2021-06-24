import React, { useState } from 'react';

import TodoAdd from './component/TodoAdd';
import TodoList from './component/TodoList';

import TodoContext from './context/TodoContext';

import './App.css';

// ===============================================

export default function App() {

  const [todo, setTodo] = useState([]);

  React.useEffect( () => {
    setTodo( JSON.parse(localStorage.getItem('todoList')) );
  }, []);

  let addTodo = (text) => {
    setTodo([
      ...todo,{
      text: text,
      key: Date.now()
    }]);
    localStorage.setItem('todoList', JSON.stringify(todo));
  }

  let deleteTodo = (key) => {
    let selectItem = todo.filter(item => item.key !== key);
    setTodo([ ...selectItem ]);
    localStorage.setItem('todoList', JSON.stringify(selectItem));
    console.log(todo);
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