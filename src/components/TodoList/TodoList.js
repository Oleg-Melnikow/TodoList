import React, {useEffect} from "react";
import style from "./TodoList.module.css"
import {connect} from "react-redux";
import {addTask, changeTask, changeTodoList, deleteTodoList, loadTasks} from "../../redux/reducer";
import TodoListTitle from "../TodoListTitle/TodoListTitle";
import TodoListTasks from "../TodoListTasks";
import AddNewItemForm from "../AddNewItemForm/AddNewItemForm";

const TodoList = (props) => {
    useEffect(() => {
        props.loadTasks(props.id)
    }, [])

    let deleted = () => {
        props.deleteTodoList(props.id)
    }

    let onAddTaskClick = (newText) => {
        props.addTask(newText, props.id)
    }

    let changeTask = (todoListId, taskId, obj) => {
        let task = props.tasks.find(t => t.id === taskId)
        let newTask = {...task, ...obj}
        props.changeTask(todoListId, taskId, newTask)
    }

    let changeTitle = (taskId, title) => {
        changeTask(props.id, taskId, {title})
    }

    let changeStatus = (taskId, status) => {
        changeTask(props.id, taskId, {status})
    }

    let {tasks = []} = props

    return (
        <div className={style.wrap}>
            <div className={style.title}>
                <TodoListTitle title={props.title} changeTodoList={props.changeTodoList} id={props.id}/>
                <i className="fas fa-trash-alt" onClick={deleted}/>
            </div>
            <div className={style.AddTaskFormWrap}>
                <AddNewItemForm addElement={onAddTaskClick}
                                btnValue='Add Task'
                                placeholderValue="New task name..."/>
            </div>
            <TodoListTasks todoListId={props.id} tasks={tasks}
                           changeTitle={changeTitle} changeStatus={changeStatus}/>
        </div>
    )
}

export default connect(null,
    {deleteTodoList, changeTodoList, loadTasks, addTask, changeTask})(TodoList)