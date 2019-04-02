import React, { Component } from 'react';
import './App.css';
import NavWrapper from './components/NavWrapper';
import {Route} from 'react-router-dom';
import data from "./dummydata"
import SubMenu from './components/SubMenu';

export default class App extends Component {
  constructor() {
    super();
  }

  getTypes = data => {
    let Types = [];
    {data.map((object) => {
        Types.push(object.name)
    })}
    console.log(Types);
    return Types;
  }

  getModels = data => {
    let Models = [];
    {data.map((object) => {
      Models.push(object.subLinks)
    })}
    console.log(Models);
    return Models;
  }

  render() {

    return (
      <div className="App">
        <Route exact path = "/" 
          render={props => <NavWrapper {...props} 
          Types={this.getTypes(data)} 
          
          />} 
        />

        <Route exact path = "/:name"
          render={props => <SubMenu Models = {this.getModels(data)}/>
          }
          />
      </div>
    );
  }
}

