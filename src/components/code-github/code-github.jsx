import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardActions,
    CardText
} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import './code-github.css';

class CodeGithubComponent extends Component {

    render() {
        return (
            <div className="code-github">
              <p className="headline">Check out my code and other projects</p>
                <Card className="projectCards">
                  <CardHeader
                    subtitle="Github Repository for this Profile"
                    title="nolannick/react-profile"
                    avatar={<Avatar 
                      alt="Nick" 
                      src="res/mipmap-hdpi/ic_launcher.png"/>}
                  />
                <CardText>
                        This application is made with React and Material UI. Check out the code on Github.
                    </CardText>
                    <CardActions>
                        <FlatButton label="View on github" href="https://github.com/nolannick/react-profile" target="_blank"/>
                    </CardActions>
                </Card>
                <Card className="projectCards">
                  <CardHeader
                    subtitle="Children's Task Management"
                    title="Doodle Bug Quest"
                    avatar="images/rolypolyimage.jpg"
                  />
                <CardText>
                        This is intended to be a mobile-only app. It is a child's task management application that allows kids to accrue 'Doodle Bucks' for doing chores, then can cash in their Doodle Bucks for rewards. Similar to a star chart. My kids LOVE it. <br/><br/>*When opening, it may take 10 seconds or so to spin up the idle server.
                    </CardText>
                    <CardActions>
                        <FlatButton label="Doodle Bug Quest" href="https://doodle-bug-quest.herokuapp.com/" target="_blank"/>
                        <FlatButton label="View on github" href="https://github.com/nolannick/doodle-bug-quest" target="_blank"/>
                    </CardActions>
                </Card>
                <Card className="projectCards">
                  <CardHeader
                    subtitle="Github Repository"
                    title="nolannick"
                    avatar="github.png"
                  />
                <CardText>
                        Contains a variety of homeworks and projects from my time at GA Tech Bootcamp. Also a few fun projects of my own.
                    </CardText>
                    <CardActions>
                        <FlatButton label="View on github" href="https://github.com/nolannick" target="_blank"/>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default CodeGithubComponent;
