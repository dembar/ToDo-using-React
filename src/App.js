import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';


const defaultTodos = [
  { text: 'Item 1', completed: true },
  { text: 'Item 2', completed: false },
  { text: 'Item 3', completed: false },
  { text: 'Item 4', completed: false },
  { text: 'Item 5', completed: true },
];

function App() {
  const [todos, setTodos] =  React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(
      todo => !!todo.completed
    ).length;
    const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );
    // console.log("Text: " + searchValue);
    
  const completeTodo = (text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true;
    setTodos(newTodos)
  }

  const deleteTodo = (text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex,1);
    setTodos(newTodos)
  }
  const resultado = (completedTodos, totalTodos) =>
    // completedTodos == 0 || 
    completedTodos === totalTodos ?
    "FELICITACIONES HAZ COMPLETADOS TODOS LOS TODOS" :
   `Has completado ${completedTodos} de ${totalTodos} ToDos`;
    ; 
  // console.log(completedTodos+" - "+ totalTodos);
  
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

export default App;