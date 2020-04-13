import React from "react";
import style from "./TodoList.module.css"
import {connect} from "react-redux";
import {deleteTodoList} from "../../redux/reducer";

const TodoList = (props) => {

    let deleted = () => {
        props.deleteTodoList(props.id)
    }

    return(<div className={style.wrap}>
            <div className={style.title}>
                <h3>{props.title}</h3>
                <i className="fas fa-trash-alt" onClick={deleted}/>
            </div>

        </div>

    )
}

export default connect(null, {deleteTodoList})(TodoList)