import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  render () {

  return (
    <div className="App">
     Hello {this.state.name}
     <input type = "text"
     value= {this.state.value}
     onChange= {this.handleChange}/>
    </div>
  );
}
}

export default App;
