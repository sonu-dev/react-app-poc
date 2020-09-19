import React, { Component } from 'react';  
import ReactDOM from 'react-dom';  
class ComponentAndProps extends Component{  
   
   constructor() {      
       super();
   }
   render(){  
    return(
        <div>
            <h2>Component and Props</h2>
            <p>All React components must act like pure functions with respect to their props.</p>
            <this.Welcome name="Aarya" /><this.Welcome name="Aarav" /><this.Welcome name="Virat" />                       
        </div>
    );
   }  
   Welcome(props) {
    return <h6>Hello, {props.name}</h6>;
  }
  
}  
ReactDOM.render(<ComponentAndProps />, document.getElementById('componentAndProps')); 