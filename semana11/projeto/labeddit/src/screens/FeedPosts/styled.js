import styled from "styled-components";
import { Toolbar, Container, FormControl, Box } from "@material-ui/core";

export const LogoHeader = styled.img`
  min-width: 15vw;
  width: 15vw;
  margin-left: 3vw;
  object-fit: cover;
`;

export const BoxLogo = styled(Toolbar)`
  width: 95vw;
  display: flex;
  justify-content: space-between;
`;

export const MainContainer = styled(Container)`
  width: 100vw;
  padding-top: 5vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 3vh;
  text-align: left;
`;

export const FormPosts = styled(FormControl)`
  display: flex;
  gap: 3vh;
`;

export const PopularPosts = styled(Box)`
  width: 80vw;
  padding: 10px;
  display: flex;
  gap: 3vw;
  border: 1px solid #000;
`;

export const Posts = styled(Box)`
  height: 40vh;
  border: 1px solid #000;
  display: flex;
  flex-grow: 1;
`;
