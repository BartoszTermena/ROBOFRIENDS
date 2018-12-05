import React from 'react'

const RobotDetails = (props) => {
    const robot = props.match.params.id;
    
    console.log(robot);
    if(robot) {
        return (
            <div className="container">
            <div class="card deep-purple darken-4 z-depth-5">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator img_details" src={`https://robohash.org/${robot}`} />
            </div>
            <div class="card-content">
              <span class="card-title activator black-text">Robot Name: {robot}<i class="material-icons right">More About</i></span>
              
            </div>
            <div class="card-reveal deep-purple lighten-2 z-depth-5">
              <span class="card-title black-text">{robot}<i class="material-icons right">close</i></span>
              <p>Here is some more information about this robot that is only revealed once clicked on.</p>
            </div>
          </div>
          </div>
        )
    } else {
        return (
            <div className="loader">Loading...</div>
            )
    }
   
}

export default RobotDetails;
