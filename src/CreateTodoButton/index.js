import './CreateTodoButton.css';
import React from 'react';
import { TodoContext } from '../TodoContext';

function CreateTodoButton(){
    const { setOpenModal } = React.useContext(TodoContext);
    return (
      <button 
        className="CreateTodoButton"
        onClick={
          // (event) => {
            () => {
            console.log('Click')
            setOpenModal(prevState => !prevState); // Con la arrow function recibo el estado previo y devuelvo la negacion del mismo estado.
          }
        }>+</button>
    );
  }

export {CreateTodoButton};