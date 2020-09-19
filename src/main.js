import React from 'react';  
import ReactDOM from 'react-dom';  
import App from './App.js';  
import RenderUi from './Topics/RenderUi';

// Hello World!
ReactDOM.render(<App />, document.getElementById('app'));  

// Rendering Ui Components
function updateUi() {
     ReactDOM.render(<RenderUi />, document.getElementById('renderUi'));
 } 
 setInterval(updateUi, 1000);

