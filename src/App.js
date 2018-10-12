import React, { Component } from 'react';
import './App.css';
import axios from "axios";

class App extends Component {

  constructor(props){
    super(props);

    this.state={
      url:""
    }
  }

  handleSubmit(){

    this.setState({
      url:this.url.value
    })

    const data={
      url:this.state.url
    }
    
    axios.post('https://east-drink.glitch.me/api/shorturl/new', data)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  render() {
    return (
      <div className="App">

      <input type="text" name="url" ref={(c)=>this.url=c}></input>
      <button onClick={this.handleSubmit.bind(this)}> submit </button>
        
      </div>
    );
  }
}

export default App;
