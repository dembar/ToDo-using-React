import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import React from "react";

function AppUI(
    {
    loading,
    error,
    completedTodos, 
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
        {loading && <p>Cargando...</p>}
        {error && <p>La carga ha fallado</p>}
        {(!loading && searchedTodos.length === 0) && <p>Crea tu primer ToDo</p>}

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