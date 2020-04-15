import React, { useState } from 'react'
import style from "./TodoListTitle.module.css"

const TodoListTitle = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [title, setTitle] = useState(props.title)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        props.changeTodoList(props.id, title)
        setEditMode(false)
    }
    const onTitleChanged = (e) => {
        setTitle(e.currentTarget.value)
    }

    return (
        editMode
            ? <input className={style.inputChange} onBlur={deactivateEditMode}
                     onChange={onTitleChanged}
                     autoFocus={true} value={title}/>
            : <h3 onClick={activateEditMode}>{props.title}</h3>
    )
}

export default TodoListTitle