import * as TYPE from '../constants'
  
const initialState = {
    loading: true,
    todos: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case TYPE.GET_TODOS:
            return {
                ...state,
                loading: false,
                todos: action.payload
            }

        case TYPE.ADD_TODO:
            return {
                ...state,
                todos: [action.payload, ...state.todos]
            }

        case TYPE.DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo._id !== action.payload._id)
            }

        case TYPE.CLEAR:
            return {
                ...state,
                todos: []
            }

        case TYPE.COMPLETE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo._id === action.payload._id)
                    return {
                        ...todo,
                        isCompleted: !todo.isCompleted
                    }
                    return todo
                })
            }

        case TYPE.LOADING_TODOS:
            return {
                ...state,
                loading: true
            }

        default: 
            return state
    }
}