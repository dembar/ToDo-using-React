import { TodoContext } from '../TodoContext';
import './TodoCounter.css';
import React from 'react';

function TodoCounter(){
    const {
        completedTodos,
        totalTodos,
        resultado,
    } = React.useContext(TodoContext);
    return (
        <h1 className="TodoCounter">
           {resultado(completedTodos, totalTodos)}
        </h1>
    );
  }

export { TodoCounter };

