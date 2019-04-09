import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Drum from './components/Drum'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class App extends Component {
  render() {
    const drums = [
      {letter: 'A', sound: 'clap', color: '#FF0066'},
      {letter: 'S', sound: 'hihat', color: '#00FF00'},
      {letter: 'D', sound: 'kick', color: '#00FFFF'},
      {letter: 'F', sound: 'openhat', color: '#FFFF00'},
      {letter: 'G', sound: 'boom', color: '#9D00FF'},
      {letter: 'H', sound: 'ride', color: '#FF6600'},
      {letter: 'J', sound: 'snare', color: '#0033FF'},
      {letter: 'K', sound: 'tom', color: '#FF0000'},
      {letter: 'L', sound: 'tink', color: '#FF0066'},
    ]
    return (
      <div className="App">

        <div className="keys">
          <Row>
            {drums.map(({letter, sound, color}) =>
              <Col key={letter} xs={4} xl="auto" align="center">
                <Drum
                  letter={letter}
                  sound={sound}
                  color={color} />
              </Col>
            )}
          </Row>
        </div>
      </div>
    );
  }


}

export default App;
