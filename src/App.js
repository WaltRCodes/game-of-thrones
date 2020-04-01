import React, { Component } from 'react'
import './App.css';
import axios from 'axios'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      questions: ["Where was Margaery Tyrell born?",
      "What region is House Targaryen in?",
      "What's the coat of arms of House Lannister?",
      "What is the second seat of House Baratheon?",
      "What is Robert Baratheon's second alias?",
      "What's the name of the founder of House Stark?",
      "What are the titles of Catelyn Stark's three POV books? "],
      answers:[]
    }
  }

  componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    //url origin: https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
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
      console.log(firstResponse.data.born);
      const answerOne = firstResponse.data.born;
      const secondResponse = responses[1];
      console.log(secondResponse.data.region);
      const thirdResponse = responses[2];
      console.log(thirdResponse.data.coatOfArms);
      const forthResponse = responses[3];
      console.log(forthResponse.data.seats[1]);
      const fifthResponse = responses[4];
      console.log(fifthResponse.data.aliases[1]);
      const sixResponse = responses[5];
      //console.log(sixResponse.data);
      axios.get(sixResponse.data.founder)
      .then(res => {
        const name = res.data.name;
        console.log("founder",name)
      })
      .catch(error => {
        console.log('there is an eror', error)
      })
      const seventhResponse = responses[6];
      //console.log(seventhResponse.data);
      let bookcalls = seventhResponse.data.povBooks.map(link => axios.get(link));
      axios.all(bookcalls).then(axios.spread((...books) => {
        let stringBooks = [books[0].data.name, books[1].data.name, books[2].data.name];
        console.log(stringBooks.join(' '));
        
      })).catch(errors => {
        console.log(errors);
      })
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