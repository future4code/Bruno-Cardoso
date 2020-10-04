import styled from "styled-components";
import { Box } from "@material-ui/core";

export const Posts = styled(Box)`
  width: 23.25vw;
  height: 40vh;
  padding: 10px 10px 0 10px;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const BoxComents = styled(Box)`
  width: 100%;
  height: 60%;
  overflow-y: scroll;
  max-height: 25vh;
  display: flex;
`;

export const BoxIcons = styled(Box)`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SpaceComent = styled(Box)`
  width: 45%;
  display: flex;
  justify-content: flex-end;
`;

export const SpaceIcon = styled(Box)`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
