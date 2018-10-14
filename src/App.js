import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import AddExcercise from './AddExcercise';

class App extends Component {

  constructor(props){
    super(props);

    this.state={
      username:"",
      serverReply:[]
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){

   this.setState({username:event.target.value});

  }

  handleSubmit(event){

    event.preventDefault();

    const data={
     username:this.state.username
    }
    
    axios.post('https://fierce-pastry.glitch.me/api/exercise/new-user', data)
    .then((response)=> {

      console.log(response.data.response);

      this.setState({serverReply: JSON.stringify(response.data.response) });
    })
    .catch(function (error) {
      console.log(error);
    });

    this.setState({username:""});


  }
  
  render() {
    return (
      <div className="App">

      <p>create a new user </p>
      <input type="text" value={this.state.username} onChange={this.handleChange}></input>
      <button onClick={this.handleSubmit}> submit </button>
      <p>{this.state.serverReply}</p>

      <AddExcercise/>
        
      </div>
    );
  }
}

export default App;
