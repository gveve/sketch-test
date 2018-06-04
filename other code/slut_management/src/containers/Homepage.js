import React, { Component } from 'react';
import Sweatshirts from '../components/Sweatshirts';
import '../App.css';


class Homepage extends Component {


  render(){
    return(
      <div class="App-header">
      <h1 class="App-title"> SLUTMANAGEMENT.COM </h1>
      <div>
      <Sweatshirts />
      </div>
      <div>
      <h3 class="App-subtitle">heyslut@slutmanagement.com</h3>
      </div>
      </div>
    )
  }
}

export default Homepage;
