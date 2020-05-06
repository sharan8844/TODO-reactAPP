import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class Todoitem extends Component {
    getStyle = () =>{
        return {
            background: 'grey',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.done ? 'line-through':'none'
        }
    }
    

    
    render() {
        const{id,title}=this.props.todo;
        return (
            <div style={this.getStyle()}>
              <p>
              <input type="checkbox" style={{cursor:'pointer'}} onChange={this.props.markComplete.bind(this,id)} />{''}
              { title }
              <button style={btnStyle} onClick={this.props.deltodo.bind(this,id)}>X</button>
              </p>  
            </div>
        )
    }
}

Todoitem.propTypes = {
    todo:PropTypes.object.isRequired
}
const btnStyle ={
    background:'#ff0000',
    color:'#fff',
    border:'none',
    padding:'5px 9px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'
}

export default Todoitem
