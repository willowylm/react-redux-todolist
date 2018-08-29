import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import TodoList from './todoList'
import User from './user'
import { addTodo } from '../actions/index'

export const App = ({ addTodo, todos }) => {
    return (
        <div>
            <User/>
            <TodoList/>
        </div>
)}


export default App
