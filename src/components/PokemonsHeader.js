import React from "react";
import { ThemeProvider } from "styled-components";
import Button from "../element/Button";

const PokemonsHeader = (props) => {
  const theme = {
    fontfamily: "Arial",
    fontsize: "40px",
  };

  return (
    <ThemeProvider theme={theme}>
      <Button onClick={props.jumpPage.bind(null, props.prevURL)}>
        Previous Page
      </Button>
      <Button onClick={props.jumpPage.bind(null, props.nextURL)} primary>
        Next Page
      </Button>
    </ThemeProvider>
  );
};

export default PokemonsHeader;
