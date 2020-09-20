import styled from "styled-components";

export const MainHeader = styled.header`
  width: 100vw;
  height: 20vh;
  box-shadow: 1px 7px 15px #000;
  background-color: #9b59b6;
  display: flex;
  justify-content: flex-end;
`;
export const Container = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Logo = styled.img`
  width: 35vw;
  height: 10vh;
  margin-left: 4vw;
  object-fit: contain;
`;

export const Button = styled.button`
  width: 15vw;
  height: 7vh;
  border-radius: 12px;
  margin: 4vh 0 0 0;
  cursor: pointer;
`;
