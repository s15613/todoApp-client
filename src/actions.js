import * as TYPE from './constants'

import axios from 'axios'

axios.defaults.baseURL = 'https://todoappofapiserver.herokuapp.com/api/todos'

export const getTodos = () => dispatch => {

    dispatch({ type: TYPE.LOADING_TODOS })

    axios.get('/')
        .then(res => dispatch({
            type: TYPE.GET_TODOS,
            payload: res.data
        }))
        .catch(err => console.log(err))
}

export const addTodo = title => dispatch => {
    axios.post('/', { title })
        .then(res => dispatch({
            type: TYPE.ADD_TODO,
            payload: res.data
        }))
        .catch(error => console.log(error))
}

export const deleteTodo = todoId => dispatch => {
    axios.post(`/${todoId}`)
        .then(res => dispatch({
            type: TYPE.DELETE_TODO,
            payload: res.data
        }))
        .catch(err => console.log(err))
}

export const completeTodo = todoId => dispatch => {
    axios.post(`/${todoId}/complete`)
        .then(res => dispatch({
            type: TYPE.COMPLETE_TODO,
            payload: res.data
        }))
        .catch(err => console.log(err))
}

export const filterTodo = (filter) => dispatch => {
    dispatch({
            type: TYPE.FILTER,
            payload: filter
        })
}

export const clear = () => dispatch => {
    axios.get('/delete/all')
        .then(res => dispatch({
            type: TYPE.CLEAR
        }))
        .catch(err => console.log(err))
}