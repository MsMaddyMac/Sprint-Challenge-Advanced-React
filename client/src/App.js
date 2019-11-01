import React, { Component } from 'react';
import axios from 'axios';

// import Players from "./components/Players";
import './App.css';



class App extends Component {
    state = {
      players: [],
    };
  
    componentDidMount() {
      axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        console.log(res);
        this.setState({
          players: res.data
        });
      })
      .catch(err => {
        console.log("No players found!", err);
      });
    }

    render() {
      console.log('App is rendering...☺️')
      return (
        <div className="App">
          
        </div>
      );
    }
  }

export default App;
