import React from "react";
import style from "./TodoList.module.css"

const TodoList = (props) => {
    return(<div className={style.wrap}>
            <div className={style.title}>
                <h3>{props.title}</h3>
                <i className="fas fa-trash-alt"/>
            </div>

        </div>

    )
}

export default TodoList