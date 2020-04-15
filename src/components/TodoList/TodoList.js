import React from "react";
import style from "./TodoList.module.css"
import {connect} from "react-redux";
import {changeTodoList, deleteTodoList} from "../../redux/reducer";
import TodoListTitle from "../TodoListTitle/TodoListTitle";

const TodoList = (props) => {

    let deleted = () => {
        props.deleteTodoList(props.id)
    }

    return(<div className={style.wrap}>
            <div className={style.title}>
                <TodoListTitle title={props.title} changeTodoList={props.changeTodoList} id={props.id}/>
                <i className="fas fa-trash-alt" onClick={deleted}/>
            </div>

        </div>

    )
}

export default connect(null, {deleteTodoList, changeTodoList})(TodoList)