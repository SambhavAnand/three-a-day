import React from 'react';import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import './style.css';
import TextLoop from 'react-text-loop';
import Receive from '../Receive';
import Donate from '../Donate';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';
export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      donor:false,
      receive:false
    }
  }

  _handleFormRender = (option) =>{
    var donor = false;
    var receive = false;
    switch(option){
      case "donor":donor=true;break;
      case "receive":receive=true;break;
    }
    this.setState({
      donor:donor,
      receive:receive
    });
  }

  render() {
    return (
      <div className="full-page">
            <div className="counter">
                  <h1>45 meals served!</h1>
            </div>
            <div className="prompt">
                  <div className="convince">
                        <h1>We Care About </h1>
                        <h1 id="bigger"><TextLoop children={["Food wastage","Food insecurity","Our City"]}/></h1>
                  </div>
                  <div className="buttons">
                      <h1>Make a change</h1>
                      <RaisedButton label="Donate" primary={true} onClick={()=>{this.props.history.push("/donate")}}/>
                      <RaisedButton label="Receive" primary={true} onClick={()=>{this.props.history.push("/receive")}}/>
                  </div>
            </div>
            <div className="what">
                <h3>What we do</h3>
                <p>1.3 Billion Tonnes of food goes to waste every year. We try to make a dent in that number. Every day eateries and households throw out food. We give them an interface to donate that food further to people who need it.</p>
                <p> First our donors donate food. Then charities, shelters and food insecure individuals request food. Lastly we make as many matches as we can. <em>It{'\''}s as easy as 1,2,3...</em></p>
            </div>

      </div>
    )
  }
}
