import React, { Component } from "react";

export class PokemonsHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <button onClick={this.props.jumpPage.bind(this, this.props.prevURL)}>
          Previous Page
        </button>
        <button onClick={this.props.jumpPage.bind(this, this.props.nextURL)}>
          Next Page
        </button>
      </React.Fragment>
    );
  }
}

export default PokemonsHeader;
