import styled from "styled-components";
import { Box } from "@material-ui/core";

export const Posts = styled(Box)`
  height: 40vh;
  padding: 10px;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-grow: 1;
`;



export const BoxIcons = styled(Box)`
width: 8vw;
height: 5vh;
display: flex;
justify-content: space-around;
align-items: center;
position: fixed;
bottom: 9vh;
`