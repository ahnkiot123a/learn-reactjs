import TodoList from "./components/TodoList";
import React from "react";

function TodoFeature(props) {
    const todoList = [
        {
            id: 1,
            title: 'Eat',
        },
        {
            id: 2,
            title: 'Sleep',
        },
        {
            id: 3,
            title: 'Study',
        }
    ]

    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={todoList}></TodoList>
        </div>
    );
}

export default TodoFeature