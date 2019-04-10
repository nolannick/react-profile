import React, {Component} from 'react';
import './introduction.css';
import Avatar from 'material-ui/Avatar';


class IntroductionComponent extends Component {
    render() {
        return (
          <div className="introduction">
            <Avatar src="nickFamily-large.jpg" size={350}/>
            <p className="introduction-text">
              Loves family, outdoors, Javascript, and all things technology.
              Correctly pronounces 'GIF' with a soft 'G'.
              Growing full-stack developer, currently living in Atlanta, Georgia. <br/>
              Go Dawgs!!!
            </p>
          </div>
        );
    }
}

export default IntroductionComponent;
