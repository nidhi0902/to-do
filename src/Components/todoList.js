import React , {Component} from 'react';
import { FaTrash, FaPen, FaRegSave } from 'react-icons/fa';

class TodoList extends Component{

    constructor(props)
    {
        super(props);
        this.delete = this.delete.bind(this);

        this.state = 
        {todos : [],
        edit: false,
        toEdit: '',
        newValue: ''}

        this.isEditTrue = this.isEditTrue.bind(this);
        this.isEdit = this.isEdit.bind(this);
        this.saveNewValue = this.saveNewValue.bind(this);
    }

    componentDidMount(){
        this.setState({todos: this.props.todos});
    }


    completed(com)
    {
      this.props.completed(com);
    }
    isEditTrue(todo)
    {
      this.setState({edit: true, toEdit: {todo}});
      console.log(this.state.toEdit);
    }
    delete(toDelete) {
        
        let newList = this.props.todos;
        for(var i=0;i<newList.length;i++)
        {
            if(newList[i]=== toDelete)
                newList.splice(i,1);

        }
       this.setState({todos:newList})
    }

    isEdit(newVal){
      this.setState({newValue: newVal});
    }

    saveNewValue(todo){
      var index = this.props.todos.indexOf(todo);
      var newList = this.props.todos;
      newList[index] = this.state.newValue;
      this.setState({todos:newList})
    }
    render(){
        return(
     <div className='table-todo' >
            <table>
              <tbody>
                {this.state.todos.map((todo) => 
                  <tr className='rows'>
                    <td>
                      <input type = 'checkbox' 
                      onChange={(e) => this.completed(todo)}/>
                    </td>
                   {this.state.edit && this.state.toEdit.todo === todo ?
                     <div><td> <input type = 'text'  value = {this.state.newValue} onChange = {(e) => this.isEdit(e.target.value, todo)} /></td>
                    <td> <FaRegSave  onClick={() => this.saveNewValue(todo)}/></td></div> 
                    :
                  <td>{todo}</td>}
                    <td>
                    <FaPen onClick={() => this.isEditTrue(todo)}/>
                    </td>

                    <td>
                    <FaTrash onClick={() => this.delete(todo)}/> 
                    </td>
                    </tr>
                )}
              </tbody>
            </table>
          </div>
        );
    }
}

export default TodoList;