import React, { Component } from 'react';
import axios from 'axios';

import Players from './components/Players';
import Navbar from './components/Navbar';
import Trophy from '../src/images/worldcuptrophy.png';
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
          <div className="header">
            <Navbar />
            <h2>Women's World Cup</h2>
            <img src={Trophy} alt="Women's 2019 World Cup Trophy" />
          </div>
          <div className="cards-display">
            <Players players={this.state.players} />
          </div>
        </div>
      );
    }
  }

export default App;
