import React from 'react';
import './styles.css';
import Field from '../../components/Fields/index.js';

export default class Donate extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div className="page">
            <h1>Donate some food!</h1>
            <div className="form">
            <div className="name">
            <Field
                label="First"
                placeHolder="Gordon"
                type="text"
                disabled={false}
                dispatch={""}
                className="name-first"
            />
            <Field
                label="Last"
                placeHolder="Ramsay"
                type="text"
                disabled={false}
                dispatch={""}
                className="name-last"
            />
            </div>
            <Field
                label="Address"
                placeHolder="15W 10th St."
                type="text"
                disabled={false}
                dispatch={""}
            />
            <Field
                label="Restaurant"
                placeHolder="Hell's Kitchen"
                type="text"
                disabled={false}
                dispatch={""}
            />
            <Field
                label="Number of dishes"
                placeHolder="18"
                type="number"
                disabled={false}
                dispatch={""}
            />
            <Field
                label="Number of people per dish"
                placeHolder="1"
                type="number"
                disabled={false}
                dispatch={""}
            />
            </div>
        </div>
    )
  }
}
/*
Donate = connect(state => {
    return {
        donate: state.donate,
        appWideStore: state.appWideStore
    }
})(Donate);*/
