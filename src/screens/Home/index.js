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
import Avatar from 'material-ui/Avatar';
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
<<<<<<< HEAD
                      <button primary={true} onClick={()=>{this.props.history.push("/donate")}} id="button-d">Donate</button>
                      <button primary={true} onClick={()=>{this.props.history.push("/receive")}} id="button-d">Receive</button>
=======
                      <button className="get-gallo" onClick={()=>{this.props.history.push("/donate")}}>Donate</button>
                      <button className="get-gallo" onClick={()=>{this.props.history.push("/receive")}}>Receive</button>
>>>>>>> 339958c438aea45688d741774a1ef1faf3f19b17
                  </div>
            </div>
            <div className="easyas">
                <h1>As easy as 1,2,3..</h1>
                <div className="padded">
                    <div className="one">
                        <Avatar size={50} id="step1">1</Avatar>
                        <p>Restaurants or Individuals donate food on our website.</p>
                    </div>
                    <div className="one">
                        <Avatar size={50} id="step2">2</Avatar>
                        <p>Food insecure People and Charities request food on our website.</p>
                    </div>
                    <div className="one">
                        <Avatar size={50} id="step3">3</Avatar>
                        <p>We make as many matches as possible</p>
                    </div>
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
