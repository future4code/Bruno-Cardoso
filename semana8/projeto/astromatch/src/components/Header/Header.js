import React from "react";
import axios from "axios";
import styled from "styled-components";
import logo from "../../img/logo.png";
import person from "../../img/matches.svg";

const Headder = styled.header`
  width: 100%;
  height: 70px;

  display: flex;
  justify-content: space-evenly;
`;
const Img = styled.img`
  width: 20vw;
  margin-left: 30px;
  object-fit: contain;
`;
const Icone = styled.img`
  width: 30px;
  cursor: pointer;
`;
const Header = (props) => {

  return (
    <>
      <Headder>
        <Img src={logo} />
        <Icone src={person}
        onClick={props.mudarPagina}

        />
      </Headder>
    </>
  );
};

export default Header;
