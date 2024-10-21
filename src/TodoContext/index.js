import React from "react";
import {useLocalStorage} from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}){
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } =  useLocalStorage('TODOS_V1', []);
      const [searchValue, setSearchValue] = React.useState('');

      const [openModal, setOpenModal] = React.useState(true);


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
    
      
    return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos, 
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            resultado,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {children}
        </TodoContext.Provider>        
    )
}

export {TodoContext, TodoProvider};


// localStorage.removeItem('TODOS_V1');
// const defaultTodos = [
//   { text: 'Item 1', completed: true },
//   { text: 'Item 2', completed: false },
//   { text: 'Item 3', completed: false },
//   { text: 'Item 4', completed: false },
//   { text: 'Item 5', completed: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));