import React, { Component } from "react";

export class PokemonsHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <button onClick={this.props.prevpage.bind(this, "test")}>
          Previous Page
        </button>
        <button onClick={this.props.nextpage.bind(this, "test")}>
          Next Page
        </button>
      </React.Fragment>
    );
  }
}

export default PokemonsHeader;
