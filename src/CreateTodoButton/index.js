import './CreateTodoButton.css';
import React from 'react';
import { TodoContext } from '../TodoContext';

function CreateTodoButton(){
    const { setOpenModal } = React.useContext(TodoContext);
    return (
      <button 
        className="CreateTodoButton"
        onClick={
          (event) => {
            console.log('Click')
            setOpenModal(prevState => !prevState);
          }
        }>+</button>
    );
  }

export {CreateTodoButton};