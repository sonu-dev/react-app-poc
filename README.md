# react-app-poc
ReactJS POC using Webpack and Babel

# Commands
start
build

# Learning
Introducing JSX:
const element = <h1>Hello, world!</h1>;

Rendering Elements:
React elements are immutable. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.

the only way to update the UI is to create a new element, and pass it to ReactDOM.render().
Consider this ticking clock example:

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);

# Resources
https://reactjs.org/docs/getting-started.html

