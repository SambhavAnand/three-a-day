import React from 'react';
import Prompt from './subsections/prompt';
import How from './subsections/how';
import Why from './subsections/why';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Prompt/>
        <How/>
      </div>
    )
  }
}
