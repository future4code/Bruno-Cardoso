import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header/Header";
import clean from "../../img/clear.svg";
import styled from "styled-components";
import { getMatches, clear } from "../../apiRequests/apiRequests";

const LimparMatches = styled.img`
  width: 100px;
  height: 100px;
  padding: 20px;
  border: 1px solid #c5c5c5;
  border-radius: 50%;
  background-color: #dcdde1;
  position: absolute;
  left: 20vw;
  bottom: 5vh;
  cursor: pointer;
`;
const MainContainer = styled.main`
  width: 90%;
  height: 85%;
  border: 2px solid #c5c5c5;
  border-radius: 12px;
  overflow-y: scroll;
`;
const ListaMatches = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 20px 0 0 0;
`;
const ItemDaLista = styled.li`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;
const ImagemMatch = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 100%;
`;
const TextoLista = styled.p`
  padding-left: 15px;
  font-weight: bold;
  color: #7d59d4;
`;
const FrameMatches = (props) => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getAllMatches();
  }, [matches]);

  const getAllMatches = () => {
    axios
      .get(getMatches)
      .then((response) => {
        setMatches(response.data.matches);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const limparMatches = () => {
    const headers = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .put(clear, headers)
      .then((response) => {}, alert("Contatinhos apagados com sucesso"));
  };

  return (
    <>
      <MainContainer>
        {matches.map((match) => {
          return (
            <>
              <ListaMatches>
                <ItemDaLista key={match.id}>
                  <ImagemMatch src={match.photo} />
                  <TextoLista>{match.name}</TextoLista>
                </ItemDaLista>
              </ListaMatches>
            </>
          );
        })}
      </MainContainer>
      <LimparMatches src={clean} onClick={() => limparMatches()} />
    </>
  );
};

export default FrameMatches;
