import styled from "styled-components";
import { Toolbar, Container, FormControl, Box } from "@material-ui/core";

export const LogoHeader = styled.img`
  min-width: 15vw;
  width: 15vw;
  margin: 3vh 0;
  object-fit: cover;
`;

export const BoxLogo = styled(Toolbar)`
  width: 95vw;
  display: flex;
  justify-content: space-between;
`;

export const MainContainer = styled(Container)`
  width: 100vw;
  padding: 3vh 0 0 5vw;
  display: flex;
  flex-direction: column;
  gap: 3vh;
  text-align: left;
`;

export const FormPosts = styled(FormControl)`
  width: 80vw;
  display: flex;
  justify-content: center;
  gap: 3vh;
`;

export const PopularPosts = styled(Box)`
  width: 80vw;
  padding: 2vh 2vw;
  border: 1px solid #000;
  border-radius: 10px;
  display: flex;
  gap: 3vw;
  flex-wrap: wrap;
`;
