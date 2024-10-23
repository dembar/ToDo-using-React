import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm(){
    const {
        setOpenModal,
        addTodo,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Add a new ToDo</label>
            <textarea 
                placeholder="Write your new ToDo"
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    onClick={onCancel}
                    className="TodoForm-button
                    TodoForm-button--cancel"
                >Cancel</button>
                <button
                    type="submit"
                    className="TodoForm-button
                    TodoForm-button--add"
                >Add</button>
            </div>
        </form>
    );
}

export { TodoForm };