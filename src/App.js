import React, { Component } from 'react'
import './App.css';
import axios from 'axios'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      data: []
    }
  }

  componentDidMount() {


  }


  render() {
    return (
      <div>
        <h1> Questions about Game of Thrones</h1>
        
      </div>
    )
  }
}