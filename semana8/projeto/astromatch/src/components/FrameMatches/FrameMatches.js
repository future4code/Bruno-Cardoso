import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header/Header";
import styled from "styled-components";
import { getMatches, clear } from "../../apiRequests/apiRequests";


const BotaoLimparMatches = styled.button`
  position: absolute;
  left: 10vw;
  bottom: 5vh;
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
`;
const ImagemMatch = styled.img`
  width: 80px;
  height: 80px;
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
  const [limpar, setLimpar] = useState([]);

  useEffect(() => {
    getAllMatches();
  }, [setMatches]);

  const getAllMatches = () => {
    axios
      .get(getMatches)
      .then((response) => {
        setMatches(response.data.matches);
        console.log(response.data.matches);
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
    axios.put(clear, headers).then((response) => {
      setLimpar(response);
      console.log(response)
    });
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
      <BotaoLimparMatches onClick={() => limparMatches()}>Limpar Matches</BotaoLimparMatches>
    </>
  );
};

export default FrameMatches;
