import React, { Component } from 'react'; 
import ReactDOM from 'react-dom';  
class ClockWithStateAndLifeCycle extends React.Component {
    constructor() {
      super();
      this.state = {date: new Date()};
      console.log("Calling Constructor()...");
    }
    
    componentDidMount() {
        console.log("Calling componentDidMount()...");
        /* The componentDidMount() method runs after the component output has been rendered to the DOM.
        This is a good place to set up a timer:*/ 
        this.timerID = setInterval(
            () => this.tick(),
            1000
          );
    }
    
    componentWillUnmount() {
        /*It will be called when component will be destroyed.*/
        console.log("Calling componentWillUnmount()...");
        clearInterval(this.timerID);
    }      

    tick() {
        console.log("Calling tick()...");
        this.setState({
          date: new Date()
        });
      }
    
      render() {
        console.log("Calling render()...");
        return (
          <div>
            <h2>Component State and Lifecycle</h2>
            <p>The <b>componentDidMount()</b> method runs after the component output has been rendered to the DOM</p>
            <h4>It is {this.state.date.toLocaleTimeString()}.</h4>
          </div>
        );
      }
  }


  ReactDOM.render(
    <ClockWithStateAndLifeCycle />,
    document.getElementById('clockWithStateAndLifeCycle')
  );