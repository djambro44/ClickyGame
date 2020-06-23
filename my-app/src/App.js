
import React, { Component } from 'react';
import Score from './components/Score/Score.js';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Characters from './characters.json';
import Card from './components/Card/Card.js';


// function App() {
//   return (
//     <div>Hello</div>
//   )
// };



class App extends Component {
  state = {
    clickedCharacters: [],
    Characters,
    score: 0,
    topScore: 0,
  };

  shuffleCharacters = (id) => {
    // let updatedScore = this.state.score;
    let Shuffled = this.state.Characters;
    for (let i = Shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = Shuffled[i];
      Shuffled[i] = Shuffled[j];
      Shuffled[j] = temp;
    };
    this.setState({Characters: Shuffled})

    this.checkIfCorrect(id);

  };
  
  checkIfCorrect = (id) => {
     let updatedScore = this.state.score;

    
    if (!(id in this.state.clickedCharacters)) {
      updatedScore++
      let updatedClicked = this.state.clickedCharacters.slice();
      updatedClicked.push(id);
      this.setState({clickedCharacters: updatedClicked});
    } else {
      updatedScore = 0
      alert("Game Over!")
      this.setState({clickedCharacters: []});
    };
  }
  //This will render the jumbotron, Navbar and imgs on page
  render() {
    return(
    <Container className="p-3">
      <Navbar className="fixed-header">
        <p>Clicky Game</p>
        <Score/>
      </Navbar>
      <Jumbotron>
        <h1 className="header">Welcome To Clicky Game</h1>

      </Jumbotron>

      {Characters.map(C => 
      {
        return(
          <Card shuffleCharacters = {this.shuffleCharacters} id={C.id} key={C.id} name = {C.name} image = {C.image}/>
        )
      })
      }

    </Container>
    
    );
  };



};

export default App;