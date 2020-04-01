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
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    let MargaeryTyrell = proxyurl+ "https://anapioficeandfire.com/api/characters/16";
    let HouseTargaryen = "https://www.anapioficeandfire.com/api/houses/378";
    let HouseLannister = "https://www.anapioficeandfire.com/api/houses/229";
    let HouseBaratheon ="https://www.anapioficeandfire.com/api/houses/17";
    let RobertBaratheon = "https://www.anapioficeandfire.com/api/characters/901";
    let HouseStark = "https://www.anapioficeandfire.com/api/houses/362";
    let CatelynStark = "https://www.anapioficeandfire.com/api/characters/232";

    const calls = [axios.get(MargaeryTyrell),axios.get(HouseTargaryen),axios.get(HouseLannister),axios.get(HouseBaratheon),axios.get(RobertBaratheon),axios.get(HouseStark),axios.get(CatelynStark)];

    axios.all(calls).then(axios.spread((...responses) => {
      const firstResponse = responses[0];
      console.log(firstResponse);
      
    })).catch(errors => {
      console.log(errors);
    })
  }


  render() {
    return (
      <div>
        <h1> Questions about Game of Thrones</h1>
        
      </div>
    )
  }
}