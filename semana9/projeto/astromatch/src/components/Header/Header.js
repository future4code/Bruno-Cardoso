import React from "react";
import styled from "styled-components";
import logo from "../../img/logo.png";
import matchesIcone from "../../img/matches.svg";

const ContainerHeader = styled.header`
  width: 90%;
  height: 70px;
  display: flex;
  justify-content: space-evenly;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Img = styled.img`
  width: 16vw;
  margin-left: 5vw;
  object-fit: contain;
`;
const Icone = styled.img`
  width: 25px;
  margin-left: 2.5vw;
  cursor: pointer;
`;

const Header = (props) => {
  return (
    <>
      <ContainerHeader>
        <Container>
          <Img src={logo} />
          <Icone src={matchesIcone} onClick={props.mudarPagina} />
        </Container>
      </ContainerHeader>
    </>
  );
};

export default Header;
