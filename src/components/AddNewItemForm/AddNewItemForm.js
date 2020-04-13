import React from 'react'
import s from './AddNewItemForm.module.css'

const AddNewItemForm = (props) => {

    return (
        <div className={s.todoListForm}>
            <input type="text" placeholder={props.placeholderValue} />
            <button>{props.btnValue}</button>
        </div>
    )
}

export default AddNewItemForm