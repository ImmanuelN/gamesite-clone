import React from 'react';
import {NavBar, BrowseBar, FilterOptions, GamesSection, } from "./components"
import "./App.css";
import { Component } from 'react';

class App extends Component{

  constructor(props){
    super(props);
    this.state={
      games:[]
    }
  }

  API_URL ="http://localhost:5038";

  componentDidMount(){
    this.getGames();
  }


  async getGames(){
    fetch(this.API_URL+"/api/gamehub/getGames").then(response=>response.json())
    .then(data=>{
      this.setState({games:data});
    })
  }


  render = () => {
    const{games}=this.state;
    return (
      <div className="App">
        <NavBar className="navbar" />
        <BrowseBar />
        <FilterOptions />
        <GamesSection games={games}/>
      </div>
    );
  }
}

export default App;
