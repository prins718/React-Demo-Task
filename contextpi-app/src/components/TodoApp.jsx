// components/TodoApp.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    setFilter,
    clearCompleted
} from './todoSlice';
function TodoApp() {
    const { items, filter } = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState('');
    const filteredTodos = items.filter(todo => {
        switch (filter) {
            case 'active':
                return !todo.completed;
            case 'completed':
                return todo.completed;
            default:
                return true;
        }
    });
    const handleAddTodo = (e) => {
        e.preventDefault();
        if (newTodo.trim()) {
            dispatch(addTodo(newTodo.trim()));
            setNewTodo('');
        }
    };
    const handleEdit = (id, text) => {
        setEditingId(id);
        setEditText(text);
    };
    const handleSaveEdit = (id) => {
        if (editText.trim()) {
            dispatch(editTodo({ id, text: editText.trim() }));
        }
        setEditingId(null);
        setEditText('');
    };
    const handleCancelEdit = () => {
        setEditingId(null);
        setEditText('');
    };
    return (
        <div>
            <h2>Todo List</h2>
            <form onSubmit={handleAddTodo}>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add a new todo..."
                />
                <button type="submit">Add</button>
            </form>
            <div>
                <button
                    onClick={() => dispatch(setFilter('all'))}
                    className={filter === 'all' ? 'active' : ''}
                >
                    All
                </button>
                <button
                    onClick={() => dispatch(setFilter('active'))}
                    className={filter === 'active' ? 'active' : ''}
                >
                    Active
                </button>
                <button
                    onClick={() => dispatch(setFilter('completed'))}
                    className={filter === 'completed' ? 'active' : ''}
                >
                    Completed
                </button>
                <button onClick={() => dispatch(clearCompleted())}>
                    Clear Completed
                </button>
            </div>
            <ul>
                {filteredTodos.map(todo => (
                    <li key={todo.id}>
                        {editingId === todo.id ? (
                            <div>
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                />
                                <button onClick={() => handleSaveEdit(todo.id)}>Save</button>
                                <button onClick={handleCancelEdit}>Cancel</button>
                            </div>
                        ) : (
                            <div>
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => dispatch(toggleTodo(todo.id))}
                                />
                                <span
                                    style={{
                                        textDecoration: todo.completed ? 'line-through' : 'none'
                                    }}
                                >
                                    {todo.text}
                                </span>
                                <button onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>
                                <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            <div>
                <p>Total: {items.length}</p>
                <p>Active: {items.filter(todo => !todo.completed).length}</p>
                <p>Completed: {items.filter(todo => todo.completed).length}</p>
            </div>
        </div>
    );
}
export default TodoApp;
