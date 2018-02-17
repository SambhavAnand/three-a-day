import React from  'react';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';

import Donate from '../screens/Donate';
import Receive from '../screens/Receive';
import Home from '../screens/Home';



class Routes extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    window.scrollTo(0,0);
  }
  render() {
    let {auth} = {...this.props};
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/donate' component={Donate}/>
        <Route path='/receive' component={Receive}/>
        <Route render={()=>
          <Redirect to='/'/>
          }
        />
      </Switch>
    )
  }
}

export default Routes;
