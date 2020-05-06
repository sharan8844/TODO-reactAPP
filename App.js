import React,{Component} from 'react';
import Todos from './components/Todo';
import AddTodo from './components/AddTodo';
import './App.css';
import Header from './components/layout/Header'
 
class  App extends Component{
  state ={
    todos:[
      {
        id:1,
        title:'take out socks',
        done: false
        
      },
      {
        id:2,
        title:'take out chaddi',
        done:false                
      },
      {
        id:3,
        title:'take out gloves',
        done:false                
      }           
    ]
  }
  //TOGGLE COMPLETE
  markComplete= (id) => {
     this.setState({todos:this.state.todos.map(todo => {
        if(todo.id === id){
         todo.done = !todo.done;
      }
       return todo;
    }) });
    //console.log(id);
}
  //DELETE TODO
 deltodo =(id) =>{
   console.log(id)
   this.setState({todos:[...this.state.todos.filter(todo => todo.id !== id)]})
   
 } 
  
  render(){
   // console.log(this.state.todos)
    return (
      <div className="App">      
      <Header/>
      <AddTodo/>
     <Todos todos={this.state.todos} markComplete={this.markComplete} deltodo={this.deltodo}/>
      </div>
    );
  }   
  }


export default App;
