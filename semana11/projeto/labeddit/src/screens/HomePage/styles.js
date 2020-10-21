import styled from "styled-components";
import { Container, FormControl, Link } from "@material-ui/core";

export const MainContainer = styled(Container)`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled(FormControl)`
  width: 40vw;
  display: flex;
  margin: 5vh 0 7vh 0;
  gap: 20px;
`;

export const Logo = styled.img`
  min-width: 35vw;
  width: 25vw;
  margin: 7vh 0;
  object-fit: contain;
`;

export const LinkTo = styled(Link)`
  cursor: pointer;
`;
