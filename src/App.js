import React, {useEffect} from 'react';
import './App.css';
import AddNewItemForm from "./components/AddNewItemForm/AddNewItemForm";
import {connect} from "react-redux";
import {addTodoList, loadTodoLists} from "./redux/reducer";
import TodoList from "./components/TodoList/TodoList";

const App = (props) => {

    useEffect(() => {
        props.loadTodoLists()
    }, [])

    return (
        <div className="App">
            <div className="container">
                <div className='addTodoListFormWrap'>
                    <AddNewItemForm btnValue='Add TodoList' placeholderValue="New todoList name..."
                                    addElement={props.addTodoList}/>
                </div>
                <div className="todoLists">
                    {props.todoLists.map(tl => <TodoList key={tl.id} title={tl.title} id={tl.id}/>)}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({todoLists: state.todoLists.todoLists})

export default connect(mapStateToProps, {loadTodoLists, addTodoList})(App);
