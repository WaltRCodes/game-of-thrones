import React, { Component } from 'react'
import './App.css';
import axios from 'axios'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      data: [],
      questions: ["Where was Margaery Tyrell born?",
      "What region is House Targaryen in?",
      "What's the coat of arms of House Lannister?",
      "What is the second seat of House Baratheon?",
      "What is Robert Baratheon's second alias?",
      "What's the name of the founder of House Stark?",
      "What are the titles of Catelyn Stark's three POV books? "]
    }
  }

  componentDidMount() {
    let MargaeryTyrell = "http://anapioficeandfire.com/api/characters/16";
    let HouseTargaryen = "http://www.anapioficeandfire.com/api/houses/378";
    let HouseLannister = "http://www.anapioficeandfire.com/api/houses/229";
    let HouseBaratheon ="http://www.anapioficeandfire.com/api/houses/17";
    let RobertBaratheon = "http://www.anapioficeandfire.com/api/characters/901";
    let HouseStark = "http://www.anapioficeandfire.com/api/houses/362";
    let CatelynStark = "http://www.anapioficeandfire.com/api/characters/232";

  }


  render() {
    return (
      <div>
        <h1> Questions about Game of Thrones</h1>
        
      </div>
    )
  }
}