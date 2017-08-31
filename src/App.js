import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import Pigs from './components/Pigs'
import Hogs from './porkers_data'

class App extends Component {
  
  constructor() {
  	super();

  	this.state ={
  		pigs: []
  	}
  }

  componentDidMount() {
  	console.log({Hogs})
  	this.setState({pigs: Hogs})
  }


  render() {
    console.log("render pigs", this.state.pigs)
    return (
      <div className="App">
          <Nav />
          <Pigs pigs={this.state.pigs}/>
      </div>
    )
  }
}

export default App;
