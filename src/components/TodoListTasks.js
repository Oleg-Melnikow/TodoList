import React from 'react'

const TodoListTasks = (props) => {
    debugger
    return (
        <div className="">
            {props.tasks.map((task) => <div style={{display: "flex", alignItems: "center"}} key={task.id}>
                <input type="checkbox" checked={task.status}/>
                    <span style={{color: "white"}}>{task.title}</span>
            </div>)}
        </div>
    )
}

export default TodoListTasks