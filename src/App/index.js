import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';

// localStorage.removeItem('TODOS_V1');
// const defaultTodos = [
//   { text: 'Item 1', completed: true },
//   { text: 'Item 2', completed: false },
//   { text: 'Item 3', completed: false },
//   { text: 'Item 4', completed: false },
//   { text: 'Item 5', completed: true },
// ];

// localStorage.setItem(itemName, JSON.stringify(defaultTodos));



function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } =  useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(
      todo => !!todo.completed
    ).length;
  const totalTodos = todos.length;

  console.log('Log 1');

  // React.useEffect(() => {
  //   console.log('Looooooooog 2');
  // })
  React.useEffect(() => {
    console.log('Looooooooog 2');
  }, [totalTodos]);

  console.log('Log 3');

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );
  
  const completeTodo = (text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos)
  }

  const deleteTodo = (text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos)
  }

  const resultado = (completedTodos, totalTodos) =>
    completedTodos === totalTodos ?
    "FELICITACIONES HAZ COMPLETADOS TODOS LOS TODOS" :
   `Has completado ${completedTodos} de ${totalTodos} ToDos`;

  
  return (
    <AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      resultado={resultado}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;