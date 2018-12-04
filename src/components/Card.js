import React, { Component } from 'react';


class Card extends Component {
  state = {
    robots: []
  };
  componentDidMount() {
    var rows = [];
    for (var i = 0; i < 15; i++) {
        rows.push(Math.random().toString(36).substring(2, 5))
  }   
  this.setState({
    robots: rows
  })
  }
  updateSearch = (event) => {
    let updatedList = this.state.robots;
    updatedList = updatedList.filter(robot => {
      return robot.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    })
    this.setState({robots: updatedList});
  }
  componentWillMount(){
    this.setState({robots: this.state.robots})
  }
  render() {
    const robots = this.state.robots.map((robot) => { return (
    <div className="images" key={robot}>
      <div className="row center-align">
        <div  className="col s12 m12 center-align">
              <div className="card">
                <div className="card-image center-align">
                <img alt="robots" className="circle responsive-img" src={`https://robohash.org/${robot}?100x100`} />
                <span className="card-title black-text">{robot}</span>
                </div>
              </div>
            </div>
            </div>
            </div>
     )}) 
  return (
    <div>
    <div className="row">
    <div className="input-field col s6">
      <input 
      placeholder="Search Robot" 
      id="name" 
      type="text" 
      onChange={this.updateSearch}/>
    </div>
    </div>
     {robots}
     </div>
  )
}
}
export default Card;