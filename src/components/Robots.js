import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Robots = [];
for (var i = 0; i < 15; i++) {
  Robots.push(Math.random().toString(36).substring(2, 5))
} 



class Card extends Component {
  state = {
    search: ''
  };
  renderRobot = robot =>{
    const {search} = this.state;
    return (
    
    <Link to={`/robot/${robot}`} key={robot}>
    <div className="images black">
    <div className="row center-align">
      <div  className="col s12 m12 center-align">
            <div className="card  deep-purple darken-4">
              <div className="card-image center-align">
              <img alt="robots" className="circle responsive-img" src={`https://robohash.org/${robot}?100x100`} />
              <span className="card-title black-text">{robot}</span>
              </div>
            </div>
          </div>
          </div>
          </div>
        </Link>
    )
}

  onchange = e =>{
    this.setState({ search : e.target.value });
  }
 
  render() {
      
      const {search} = this.state;
      const filteredRobots = Robots.filter( robot =>{
        return robot.toLowerCase().indexOf( search.toLowerCase() ) !== -1
    })
    
  return (
    <div>
    <div className="row">
    <div className="input-field col s6">
    <input placeholder="Search" onChange={this.onchange}/>
    </div>
    </div>

   { 
     filteredRobots.map( robot => {
       return this.renderRobot(robot)
     })
   }

      </div>
  )  
}
}
export default Card;