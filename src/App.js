import React from 'react';
import './App.css';
import AddNewItemForm from "./components/AddNewItemForm/AddNewItemForm";

const App = () => {
  return (
    <div className="App">
        <div className='addTodoListFormWrap'>
            <AddNewItemForm btnValue='Add TodoList' placeholderValue="New todoList name..."/>
        </div>
    </div>
  );
}

export default App;
