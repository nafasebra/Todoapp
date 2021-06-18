import React from 'react';

const TodoContext = React.createContext({
    todos: [],
    add: () => {},
    delete: () => {}
});

export default TodoContext;