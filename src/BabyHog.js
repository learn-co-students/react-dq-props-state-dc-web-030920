import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import normalBaby from './assets/unadulterated-hoglette.png'
import SunBaby from './assets/sun-eyes.png'
import BlueBaby from './assets/blue-eyes.png'
import GlowingBaby from './assets/glowing-eyes.png'

// is there a way we could associate eye color string values with images? 
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

// While the changeWeight method has been implemented in BabyHog, it is not 'hooked up' to the component.
//  Make sure the function is invoked so our hogs can grow and shrink when either of the button's are clicked.
//  (Consider how MasterHog's changeEyeColor method is 'hooked up' if you are stuck here)

export default class BabyHog extends Component {

  constructor(props) {

    super(props)
    this.state = {weight: 30}
  }

  changeWeight = (e) => {
    // nothing needs to change here
    const newWeight = e.target.name === "+" ? (this.state.weight + 10) : (this.state.weight - 10)
    this.setState({
      weight: newWeight
    })
  }

  render() {
   
    return (
      <li className="hogbabies">
        <h1>Name {this.props.name} </h1>
        <h3>Weight: {this.state.weight}</h3>
        <h3>Hobby: {this.props.hobby}</h3>
        <h4>Eye Color: {this.props.eyeColor}</h4>
          
        <Button name="+" onClick = {this.changeWeight}>
          Increase Weight
        </Button>
        <Button name="-" onClick = {this.changeWeight}>
          Decrease Weight
        </Button>

        <div className="hb-wrap">
          <img src={normalBaby} style={{height: '200px'}} alt="MasterBlasterJrJr" />
        </div>
        
      </li>
    )
  }
}
