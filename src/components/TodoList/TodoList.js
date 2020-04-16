import React, {useEffect} from "react";
import style from "./TodoList.module.css"
import {connect} from "react-redux";
import {changeTodoList, deleteTodoList, loadTasks} from "../../redux/reducer";
import TodoListTitle from "../TodoListTitle/TodoListTitle";
import TodoListTasks from "../TodoListTasks";

const TodoList = (props) => {
    useEffect(() => {
        props.loadTasks(props.id)
    }, [])

    let deleted = () => {
        props.deleteTodoList(props.id)
    }

    return(<div className={style.wrap}>
            <div className={style.title}>
                <TodoListTitle title={props.title} changeTodoList={props.changeTodoList} id={props.id}/>
                <i className="fas fa-trash-alt" onClick={deleted}/>
            </div>
            <TodoListTasks todoListId={props.id} tasks={props.tasks}/>
        </div>

    )
}

export default connect(null, {deleteTodoList, changeTodoList, loadTasks})(TodoList)