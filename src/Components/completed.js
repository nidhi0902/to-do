import React , {Component} from 'react';


class Completed extends Component {
    constructor(props)
    {
        super(props);
    }

    render(){
        return(
     <div className='table-completed' >
            <table>
              <tbody>
                {this.props.completed.map((completed) => 
                  <tr className='rows'>
                    <td>
                    {completed}
                    </td>
                    </tr>
                )}
              </tbody>
            </table>
          </div>
        );
    }
}

export default Completed;