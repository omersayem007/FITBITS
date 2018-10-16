import React, { Component } from 'react';
import './App.css';
import axios from "axios";

class AddExcercise extends Component {

  constructor(props){

    super(props);

    this.state={
      userId:"",
      description:"",
      duration:"",
      date:"",
      serverReply:""
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);

  }


  handleChange(event){
    this.setState({ [ event.target.name]: event.target.value });

    //https://medium.com/@tmkelly28/handling-multiple-form-inputs-in-react-c5eb83755d15
  }

  handleSubmit(event){

    event.preventDefault();

    const data={
     userId:this.state.userId,
     description:this.state.description,
     duration:this.state.duration,
     date:this.state.date
    }
    
    axios.post('https://fierce-pastry.glitch.me/api/exercise/add', data)
    .then((response)=> {

      console.log(response.data);

      this.setState({serverReply: JSON.stringify(response.data) });
    })
    .catch(function (error) {
      console.log(error);
    });

    this.setState({
      userId:"",
      description:"",
      duration:"",
      date:""
    })


  }

  render() {
    return (
      <div className="App">

      <p>Add Excercise</p>

      <input type="text" placeholder="UserID" name="userId" onChange={this.handleChange}></input><br/>
      <input type="text" placeholder="Description" name="description" onChange={this.handleChange}></input><br/>
      <input type="text" placeholder="Duration" name="duration" onChange={this.handleChange}></input><br/>
      <input type="text" placeholder="Date" name="date" onChange={this.handleChange}></input><br/>

      <button onClick={this.handleSubmit}>Submit</button>

      <p>{this.state.serverReply}</p>
        
      </div>
    );
  }
}

export default AddExcercise;
