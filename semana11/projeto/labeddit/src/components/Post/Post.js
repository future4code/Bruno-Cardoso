import React from "react";
import { Typography } from "@material-ui/core";
import CloudDownloadRoundedIcon from "@material-ui/icons/CloudDownloadRounded";
import CloudUploadRoundedIcon from "@material-ui/icons/CloudUploadRounded";
import { BoxIcons, Posts, BoxComents, SpaceComent, SpaceIcon } from "./styles";
import { useHistory } from "react-router-dom";

const Post = (props) => {
  const history = useHistory();

  const goToPostPage = () => {
    history.push(`/posts/comentarios/${props.posts.id}`);
  };

  return (
    <>
      <Posts onClick={goToPostPage}>
        <Typography variant="h6">{props.posts.username}</Typography>
        <BoxComents>
          <Typography variant="body1">{props.posts.text}</Typography>
        </BoxComents>
        <BoxIcons>
          <SpaceIcon>
            <Typography variant="h6">{props.posts.votesCount}</Typography>
            <CloudUploadRoundedIcon
              onClick={() => props.vote(+1, props.posts.id)}
              style={{ cursor: "pointer" }}
            />
            <CloudDownloadRoundedIcon
              onClick={() => props.vote(-1, props.posts.id)}
              style={{ cursor: "pointer" }}
            />
          </SpaceIcon>
          <SpaceComent>
            <Typography variant="h6">
              {props.posts.commentsCount} comentários
            </Typography>
          </SpaceComent>
        </BoxIcons>
      </Posts>
    </>
  );
};

export default Post;
