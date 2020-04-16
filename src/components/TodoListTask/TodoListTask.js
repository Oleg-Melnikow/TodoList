import React, {useState} from 'react'
import style from "./TodoListTask.module.css"
import s from "../TodoListTitle/TodoListTitle.module.css"


const TodoListTask = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [title, setTitle] = useState(props.task.title)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
    }

    return (
        <div className={style.todoListTask}>
            <input type="checkbox" id="task" checked={props.task.status}/>
            <label form="task"/>
            {editMode
                ? <input className={s.inputChange} autoFocus={true} onBlur={deactivateEditMode} value={title}/>
                : <span onClick={activateEditMode}>{props.task.title}</span>
            }
        </div>
    )
}

export default TodoListTask