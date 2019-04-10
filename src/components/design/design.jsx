import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import './design.css';


class DesignComponent extends Component {

  render() {
    return (
      <div className="design">
        <p className="headline">Project Management Approach</p>
        <p className="text-justify">
          Through my time in the business world, I have seen just about every approach under the sun towards Project Management and Employee Management. Management just as much of an art form as it is applying discipline and science. No client, product, or team is ever the same, and should be treated as uniquely as the project. <b>Agile</b> has become this trending word towards development, intended to signify the ability to take in feedback and adjust a plan accordingly. However, I would just refer to it as plain ole' <b>Development</b> in any client-based world. Keeping the client, development team, internal managers, and any key stakeholders engaged in the project is so crucial to the project. Communication, adaptability, and problem solving are all required for a successful client project implementation.

            </p>

        <div className="design-checkbox">
          <Checkbox
            checkedIcon={<ActionFavorite />}
            uncheckedIcon={<ActionFavoriteBorder />}
            iconStyle={{ "fill": "#A80202" }}
            label="Client Relationships"
          />
        </div>
        <div className="design-checkbox">
          <Checkbox
            checkedIcon={<ActionFavorite />}
            uncheckedIcon={<ActionFavoriteBorder />}
            iconStyle={{ "fill": "#A80202" }}
            label="Agile Development"
          />
        </div>
        <div className="design-checkbox">
          <Checkbox
            checkedIcon={<ActionFavorite />}
            uncheckedIcon={<ActionFavoriteBorder />}
            iconStyle={{ "fill": "#A80202" }}
            label="Communication"
          />
        </div>
        <div className="design-checkbox">
          <Checkbox
            checkedIcon={<ActionFavorite />}
            uncheckedIcon={<ActionFavoriteBorder />}
            iconStyle={{ "fill": "#A80202" }}
            label="Adaptability"
          />
        </div>
        <div className="design-checkbox">
          <Checkbox
            checkedIcon={<ActionFavorite />}
            uncheckedIcon={<ActionFavoriteBorder />}
            iconStyle={{ "fill": "#A80202" }}
            label="Problem Solving"
          />
        </div>
        <div className="design-checkbox">
          <Checkbox
            checkedIcon={<ActionFavorite />}
            uncheckedIcon={<ActionFavoriteBorder />}
            iconStyle={{ "fill": "#A80202" }}
            label="Teamwork"
          />
        </div>

      </div>
    );
  }
}

export default DesignComponent;
