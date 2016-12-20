import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
	      {this.props.children} {/*necessary for rendering of child components within App*/}
      </div>
    );
  }
}
