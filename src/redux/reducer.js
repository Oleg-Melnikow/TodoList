import { API } from '../api/api'

export const SET_TODOLISTS = 'App/Reducer/SET_TODOLISTS'
export const DELETE_TODOLIST = 'TodoList/Reducer/DELETE_TODOLIST'
export const ADD_TODOLIST = 'TodoList/Reducer/ADD_TODOLIST'

const initialState = {
    todoLists: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODOLISTS:
            return { ...state, todoLists: action.todoLists.map(tl => ({ ...tl, tasks: [] })) }
        case DELETE_TODOLIST:
            return { ...state, todoLists: state.todoLists.filter(tl => tl.id !== action.todoListId) }
        case ADD_TODOLIST: {
            return {...state, todoLists: [...state.todoLists, action.newTodoList]}
        }
        default: return state
    }
}

export const loadTodoListsSuccess = (todoLists) => ({ type: SET_TODOLISTS, todoLists })
export const deleteTodoListSuccess = (todoListId) => ({ type: DELETE_TODOLIST, todoListId })
export const addTodoListSuccess = (newTodoList) => ({ type: ADD_TODOLIST, newTodoList })

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