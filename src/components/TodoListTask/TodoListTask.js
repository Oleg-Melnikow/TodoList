import React, {useState} from 'react'
import style from "./TodoListTask.module.css"
import s from "../TodoListTitle/TodoListTitle.module.css"
import ButtonDelete from "../ButtonDelete";


const TodoListTask = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [title, setTitle] = useState(props.task.title)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.changeTitle(props.task.id, title)
    }

    const onChangeTitle = (e) => {
        setTitle(e.currentTarget.value)
    }

    const onChangeStatus = () => {
        let status = props.task.status ? 0 : 2
        props.changeStatus(props.task.id, status)
    }

    const deleteTask = () => {
        debugger
        props.deleteTask(props.task.id, props.todoListId)
    }

    return (
        <div className={style.todoListTask}>
            <div className={style.task}>
                <input type="checkbox" id="task" checked={props.task.status}/>
                <label form="task" onClick={onChangeStatus}/>
                {editMode
                    ? <input className={s.inputChange} autoFocus={true}
                             onBlur={deactivateEditMode} value={title} onChange={onChangeTitle}/>
                    : <span onClick={activateEditMode}>{props.task.title}</span>
                }
            </div>
            <ButtonDelete deleted={deleteTask}/>
        </div>
    )
}

export default TodoListTask