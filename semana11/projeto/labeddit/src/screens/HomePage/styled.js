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
  margin: 10vh 0;
  display: flex;
  gap: 20px;
`;

export const Logo = styled.img`
  min-width: 25vw;
  width: 25vw;
  margin-top: 10vh;
  object-fit: cover;
`;

export const LinkTo = styled(Link)`
  cursor: pointer;
`;
