// components/TodoList.tsx
"use client";
import { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const addTodo = () => {
    if (inputValue.trim() === '') return;

    const newTodo: Todo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-gray-800 p-6 rounded-lg shadow-lg"> 
      <h1 className="text-2xl font-bold mb-4 text-white">Todo List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border rounded-l px-4 py-2 flex-grow"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white rounded-r hover:bg-blue-600 px-4 py-2"
        >
          Add
        </button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className="flex justify-between items-center mb-2 p-2 border rounded">
            <span
              onClick={() => toggleTodo(todo.id)}
              className={`cursor-pointer ${todo.completed ? 'line-through text-green-600' : 'text-white'}`} 
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="bg-red-600 text-white rounded px-2 py-1 hover:bg-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
    
  );
};

export default TodoList;
