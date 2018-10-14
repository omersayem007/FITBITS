import React, { Component } from 'react';
import './App.css';
import axios from "axios";

class AddExcercise extends Component {

  constructor(props){
    super(props);
  }

  
  
  render() {
    return (
      <div className="App">

      <p>Add Excercise</p>

      <input type="text" placeholder="UserID"></input><br/>
      <input type="text" placeholder="Description"></input><br/>
      <input type="text" placeholder="Duration"></input><br/>
      <input type="text" placeholder="Date"></input><br/>

      <button>Submit</button>
        
      </div>
    );
  }
}

export default AddExcercise;
