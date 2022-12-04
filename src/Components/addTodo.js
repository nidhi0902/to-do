import React , {Component} from 'react';
import TodoList from './todoList';
import { nanoid } from 'nanoid';
import Completed from './completed';

class AddTodo extends Component{
    constructor(props){
        super(props);
        this.state = {
            todos : [],
            todoItem : '',
            completedTasks: []
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.completedTask = this.completedTask.bind(this);
    }


    onSubmit (e) {
        e.preventDefault(); 
        let newList = this.state.todos;
        newList.push(this.state.todoItem);
        this.setState({todos : newList, todoItem: ''});
    }

    completedTask(completedTask)
    { 
        if(!this.state.completedTasks.includes(completedTask))
            this.setState({completedTasks: [...this.state.completedTasks, completedTask]});
    }
    render() {
        return(
            <div className='todo-form-container'>
                <h2>To-Do List</h2>
                <form className='todo-form' onSubmit={this.onSubmit}>
                    <input className = 'todo-input' value = {this.state.todoItem} type = 'text' placeholder='Enter item' name='todo' onChange={(e) => this.setState({todoItem : e.target.value})} />
                    <button  className= 'button-add' type = 'submit' >Add</button>
                </form>
                <TodoList todos = {this.state.todos} completed = {this.completedTask}/>
                <h6>Completed</h6>
                <Completed completed = {this.state.completedTasks}/>
            </div>
        );
    }
}

export default AddTodo;