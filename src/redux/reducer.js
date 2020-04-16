import {API} from '../api/api'

export const SET_TODOLISTS = 'App/Reducer/SET_TODOLISTS'
export const DELETE_TODOLIST = 'TodoList/Reducer/DELETE_TODOLIST'
export const ADD_TODOLIST = 'TodoList/Reducer/ADD_TODOLIST'
export const CHANGE_TODOLIST = 'TodoList/Reducer/CHANGE_TODOLIST'
export const SET_TASKS = 'TodoList/Reducer/SET_TASKS'

const initialState = {
    todoLists: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODOLISTS:
            return {...state, todoLists: action.todoLists.map(tl => ({...tl, tasks: []}))}
        case DELETE_TODOLIST:
            return {...state, todoLists: state.todoLists.filter(tl => tl.id !== action.todoListId)}
        case ADD_TODOLIST: {
            return {...state, todoLists: [...state.todoLists, action.newTodoList]}
        }
        case CHANGE_TODOLIST: {
            return {
                ...state,
                todoLists: state.todoLists.map(tl => {
                    if (tl.id === action.todoListId) return {...tl, title: action.title}
                    else return tl
                })
            }
        }
        case SET_TASKS: {
            debugger
            return {
                ...state,
                todoLists: state.todoLists.map(tl => {
                    if (tl.id === action.todoListId) {
                        return {...tl, tasks: action.tasks}
                    } else return tl
                })
            }
        }
        default:
            return state
    }
}

export const loadTodoListsSuccess = (todoLists) => ({type: SET_TODOLISTS, todoLists})
export const deleteTodoListSuccess = (todoListId) => ({type: DELETE_TODOLIST, todoListId})
export const addTodoListSuccess = (newTodoList) => ({type: ADD_TODOLIST, newTodoList})
export const changeTodoListSuccess = (todoListId, title) => ({type: CHANGE_TODOLIST, todoListId, title})
export const loadTasksSuccess = (tasks, todoListId) => ({type: SET_TASKS, tasks, todoListId})

export const loadTodoLists = () => async (dispatch) => {
    let todoLists = await API.getTodoLists()
    dispatch(loadTodoListsSuccess(todoLists))
}

export const deleteTodoList = (todoListId) => async (dispatch) => {
    await API.deleteTodoList(todoListId)
    dispatch(deleteTodoListSuccess(todoListId))
}

export const addTodoList = (title) => async (dispatch) => {
    let todoList = await API.createTodoList(title)
    dispatch(addTodoListSuccess(todoList))
}

export const changeTodoList = (todoListId, title) => async (dispatch) => {
    await API.updateTodoList(todoListId, title)
    dispatch(changeTodoListSuccess(todoListId, title))
}

export const loadTasks = (todoListId) => async (dispatch) => {
    let tasks = await API.getTasks(todoListId)
    dispatch(loadTasksSuccess(tasks, todoListId))
}