import React, { Component } from 'react';
import '../App.css';
import Sweat1 from '../images/SLUT1.jpg';
import Sweat2 from '../images/SLUT2.jpg';
import Sweat3 from '../images/SLUT3.jpg';


class Sweatshirts extends Component {


  render(){
    return(
      <div class='Sweat'>
        <div class='Sweat-pic'>
        <img src={Sweat1} width="90%" height="auto"/>
        </div>
        <div class='Sweat-pic'>
        <img src={Sweat2} width="90%" height="auto"/>
        </div>
        <div class='Sweat-pic'>
        <img src={Sweat3} width="90%" height="auto"/>
        </div>
      </div>
    )
  }
}

export default Sweatshirts;
