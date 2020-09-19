import React, { Component } from 'react';  
import ReactDOM from 'react-dom';  
class RenderUi extends Component{  
   render(){  
      return(  
        <div>
         <h2>Rendring Ui</h2>
         <p>React elements are immutable. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time. 
               the only way to update the UI is to create a new element, and pass it to ReactDOM.render().</p>
         <b>It is {new Date().toLocaleTimeString()}.</b>
        </div>  
      );  
   }  
}  
function updateUi() {
   ReactDOM.render(<RenderUi />, document.getElementById('renderUi'));
} 
setInterval(updateUi, 1000);
  