import React,{Component} from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';
class  Todos extends Component{
  render(){
    //  console.log(this.props.todos)
     return this.props.todos.map((todo) => {
     return <Todoitem key={todo.id} todo={todo} markComplete={this.props.markComplete} deltodo={this.props.deltodo} />;
     });
   } 
}  

Todos.propTypes = {
    todos:PropTypes.array.isRequired
}
  


export default Todos;
