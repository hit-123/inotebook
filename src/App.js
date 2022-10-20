import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  state = {
    loading: 100
  }

  setProgress = (loading) =>{
    this.setState({ loading: loading})
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <LoadingBar
            color='#f11946'
            progress={this.state.loading}
            />
          <Switch>
          <div className='container'>
            <Route exact path="/"><Home/></Route>
            <Route exact path="/home"><Home/></Route>
            <Route exact path="/about"><About/></Route>
          </div>
          </Switch>
        </Router>
      </div>
    )
  }
}