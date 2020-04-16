import React from 'react'
import TodoListTask from "./TodoListTask/TodoListTask";

const TodoListTasks = (props) => {
    debugger
    return (
        <div>
            {props.tasks.map((task) => <TodoListTask key={task.id} task={task} todoListId={props.todoListId}/>)}
        </div>
    )
}

export default TodoListTasks