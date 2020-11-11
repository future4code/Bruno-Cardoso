import { Box } from "@material-ui/core";
import styled from "styled-components";

export const PostsPostPage = styled(Box)`
  width: 100%;
  height: 40vh;
  padding: 10px 10px 0 10px;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  gap: 20px;
  cursor: pointer;
`;

export const SpaceIconPostPage = styled(Box)`
  width: 45%;
  display: flex;
  gap: 1vw;
  align-items: center;
`;

export const SpaceComentPostPage = styled(Box)`
  width: 45%;
  display: flex;
  justify-content: flex-end;
`;
