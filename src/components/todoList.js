import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addTodoItem ,COMPLETE_TODO} from '../actions/index'

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <input type="text" ref={(el)=> {
            this.input = el;
          }}/>
        </div>
        <div>
          <input type="button" value="增加" onClick={()=> {
            this.props.addTodoItem(this.input.value);
          }} />
        </div>
        <ul className="todo-list">
          {this.props.todoList.map((todoItem) =>{
            return(<li key={todoItem.id}>
              <input 
              type = "checkbox"  
              onClick={()=>{this.props.COMPLETE_TODO(todoItem.id)}}
              
              ></input>
              {
                console.log("complete:",todoItem.completed)
              }
              <input 
              style = {todoItem.completed ? {textDecoration:"line-through"}:{}}
              value={todoItem.name}
              /></li>) 
          })}
        </ul>
      </div>
    );
  }
}

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  addTodoItem: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    todoList: state.todos
  }
}

export default connect(mapStateToProps, { addTodoItem,COMPLETE_TODO})(TodoList)
