import React, { useState, useEffect } from "react";

const PokemonsHeader = (props) => {
  return (
    <React.Fragment>
      <button onClick={props.jumpPage.bind(null, props.prevURL)}>
        Previous Page
      </button>
      <button onClick={props.jumpPage.bind(null, props.nextURL)}>
        Next Page
      </button>
    </React.Fragment>
  );
};

export default PokemonsHeader;
