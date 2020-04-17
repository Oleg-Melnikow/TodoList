import React from 'react'
import TodoListTask from "./TodoListTask/TodoListTask";

const TodoListTasks = (props) => {
    return (
        <div>
            {props.tasks.map((task) => <TodoListTask key={task.id} task={task} todoListId={props.todoListId}
                                                     changeTitle={props.changeTitle}
                                                     changeStatus={props.changeStatus}/>)}
        </div>
    )
}

export default TodoListTasks