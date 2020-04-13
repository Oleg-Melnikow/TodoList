import { API } from '../api/api'

export const SET_TODOLISTS = 'App/Reducer/SET_TODOLISTS'

const initialState = {
    todoLists: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODOLISTS:
            return { ...state, todoLists: action.todoLists.map(tl => ({ ...tl, tasks: [] })) }
        default: return state
    }
}

export const loadTodoListsSuccess = (todoLists) => ({ type: SET_TODOLISTS, todoLists })

export const loadTodoLists = () => async (dispatch) => {
    let todoLists = await API.getTodoLists()
    dispatch(loadTodoListsSuccess(todoLists))
}