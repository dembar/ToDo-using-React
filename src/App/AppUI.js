import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import {TodosLoading} from '../TodosLoading';
import {TodosError} from '../TodosError';
import {EmptyTodos} from '../EmptyTodos';
import { TodoContext } from '../TodoContext';
import { TodoForm } from '../TodoForm';
import React from "react";
import { Modal } from '../Modal';

function AppUI(){
  const {
      loading,
      error,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
  } = React.useContext(TodoContext);
    return (
    <>
      {/* <TodoCounter />
      <TodoSearch /> */}
      {loading && <TodosLoading />}
      {error && <TodosError />}
      {!loading && <TodoCounter />}
      {!loading && <TodoSearch />}
      <TodoList>
        {(!loading && searchedTodos.length === 0) && <EmptyTodos />}
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

        {openModal && (
            <Modal>
              <TodoForm>

              </TodoForm>
            </Modal>
        )}

    </>
    );
}

export { AppUI };