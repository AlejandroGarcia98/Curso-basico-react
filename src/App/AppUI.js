import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm } from '../TodoForm';
import { Modal } from '../Modal';
import { TodoContext } from '../TodoContext';


function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <>
      <TodoCounter  />
      <TodoSearch />

      <TodoList>
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {error && <TodosError />}
        {(!loading && searchedTodos.lenght ===
        0) && <EmptyTodos />}

        {searchedTodos.map(todo => (
          <TodoItem
            key ={todo.text}
            text = {todo.text}
            completed = {todo.completed}
            onComplete = {() => completeTodo(todo.
            text)}
            onDelete = {() => deleteTodo(todo.
            text)}
          />
        ))}
      </TodoList>
          
      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />

      {openModal && (
      <Modal>
        <TodoForm />
      </Modal>)}

    </>
  );
}

export { AppUI };

// localStorage.removeItem('TODOS_V1');

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la llorona', completed: true },
//   { text: 'LALALALA', completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));