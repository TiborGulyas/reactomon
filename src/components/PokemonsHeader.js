import React from "react";
import BootButton from "react-bootstrap/Button";

const PokemonsHeader = (props) => {
  return (
    <React.Fragment>
      <div className="text-center">
        <BootButton
          variant="outline-secondary"
          onClick={props.jumpPage.bind(null, props.prevURL)}
        >
          Previous Page
        </BootButton>
        <BootButton
          variant="outline-secondary"
          onClick={props.jumpPage.bind(null, props.nextURL)}
        >
          Next Page
        </BootButton>
      </div>
    </React.Fragment>
  );
};

export default PokemonsHeader;
