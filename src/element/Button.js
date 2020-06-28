import styled, { css } from "styled-components";

export default styled.button`
  font-family: ${(props) => props.theme.fontfamily};
  font-size: ${(props) => props.theme.fontsize};
  border: none;
  border-radius: 5px;
  padding: 7px 10px;
  background: ${(props) => (props.primary ? "red" : "green")};
  color: #fff;
  &:hover {
    background: yellow;
    color: black;
  }
`;
