import styled from "styled-components";

export const ContentContainer = styled.div`
  width: 100%;
  margin-top: 5vh;
  display: flex;
  justify-content: center;
`;

export const Title = styled.h2`
width: 45vw;
display: flex;
justify-content: flex-start;

`

export const List = styled.ul`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
`;

export const ListItem = styled.li`
  width: 60%;
  height: 6vh;
  padding-left: 1vw;
  border: 2px solid #000;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Bold = styled.span`
  text-decoration: bold;
`;

export const Text = styled.p`

`;

export const BoxIcons = styled.div`
width: 15vw;
margin-right: 2vw;
display: flex;
flex-grow: 1;
gap: 35px;
justify-content: flex-end;

`
