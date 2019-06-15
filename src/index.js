import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render(){
    return (
      <h1>
        Do you React?
      </h1>
    )
  }
}

window.addEventListener("load", () => ReactDOM.render(<App/>, document.querySelector("#app")));