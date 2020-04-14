import React, {useState} from 'react'
import style from './AddNewItemForm.module.css'

const AddNewItemForm = (props) => {

    const [error, setError] = useState(false)
    const [title, setTitle] = useState('')

    let classForInput = error ? `${style.input} ${style.error}` : `${style.input}`

    const onAddBtnClick = () => {
        if (title === '') setError(true)
        else {
            setError(false)
            setTitle('')
            props.addElement(title)
        }
    }

    const onInputChange = (e) => {
        setError(false)
        setTitle(e.currentTarget.value)
    }

    const onEnterPress = (e) => {
        if (e.key === 'Enter') {
            onAddBtnClick()
        }
    }

    return (
        <div className={style.todoListForm}>
            <input className={classForInput} type="text" placeholder={props.placeholderValue}
                   value={title} onChange={onInputChange} onKeyPress={onEnterPress}/>
            <button onClick={onAddBtnClick}>{props.btnValue}</button>
        </div>
    )
}

export default AddNewItemForm