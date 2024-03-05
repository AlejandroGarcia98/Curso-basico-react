import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({
    loading,
    error,
    completedTodos, 
    totalTodos,
    searchValue, 
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {
    return (
        <>
          <TodoCounter  completed={completedTodos} total={totalTodos}  />
          <TodoSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
    
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
                key={todo.text} 
                text={todo.text} 
                completed={todo.completed}
                onComplete={() => completeTodo(todo.
                text)}
                onDelete={() => deleteTodo(todo.
                text)}
              />
            ))}
          </TodoList>
          
          <CreateTodoButton />
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