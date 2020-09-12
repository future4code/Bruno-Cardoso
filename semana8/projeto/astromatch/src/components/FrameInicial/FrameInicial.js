import React from "react";
import noMatch from "../../img/noMatch.svg";
import love from "../../img/match.svg";
import styled from "styled-components";

const MainContainer = styled.main`
  width: 90%;
  height: 70%;
  border: 2px solid #c5c5c5;
  border-radius: 12px;
`;
const BlurBottom = styled.div`
  width: 26.4%;
  height: 110px;
  padding: 0 0 10px 10px;
  border-radius: 0 0 12px 12px;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 20vh;
`;
const NomePessoas = styled.h2`
  font-size: 22px;
  color: #7d59d4;
`;
const Bio = styled.p`
  width: 100%;
  padding-right: 10px;
  font-size: 15px;
  color: #fff;
  position: relative;
  z-index: 20;
`;
const Fotos = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  overflow: hidden;
`;
const Cancel = styled.img`
  width: 55px;
  object-fit: contain;
  cursor: pointer;
`;
const Love = styled.img`
  width: 55px;
  object-fit: contain;
  cursor: pointer;
`;
const ContainerFooter = styled.footer`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  gap: 20px;
`;

const FrameInicial = (props) => {
  return (
    <MainContainer>
      <Fotos src={props.foto} />
      <BlurBottom>
        <NomePessoas>
          {props.nome}, {props.idade}
        </NomePessoas>
        <Bio>{props.descricao}</Bio>
      </BlurBottom>
      <ContainerFooter>
        <Cancel src={noMatch} alt={"icone NoMacth"} onClick={() => props.mostrarPessoas()} />
        <Love src={love} alt={"icone Macth"} onClick={() => props.matches()} />
      </ContainerFooter>
    </MainContainer>
  );
};
export default FrameInicial;
