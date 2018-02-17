/*
  Library Imports
*/
import React from 'react';
import {withRouter} from 'react-router-dom';

/*
  Custom Imports
*/
import Routes from '../utilities/Routes.js';


class Main extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return  (
      <div className="full-page body">
        <Routes/>
      </div>
    )
  }
}

export default withRouter(Main);
