import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import React from "react";

function AppUI(
    {completedTodos, 
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    resultado,
    completeTodo,
    deleteTodo,}
){
    return (
    <>
      <TodoCounter 
        // completed={completedTodos}
        // total={totalTodos}
        elResultado = {resultado(completedTodos, totalTodos)}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete ={() => completeTodo(todo.text)}
            onDelete ={() => deleteTodo(todo.text)}
            />
        ))}
      </TodoList>
      
      <CreateTodoButton />
    </>
    );
}

export { AppUI };