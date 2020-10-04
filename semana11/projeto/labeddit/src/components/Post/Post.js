import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../services/getRequests";
import { Typography } from "@material-ui/core";
import CloudDownloadRoundedIcon from "@material-ui/icons/CloudDownloadRounded";
import CloudUploadRoundedIcon from "@material-ui/icons/CloudUploadRounded";
import { BoxIcons, Posts, BoxComents, SpaceComent, SpaceIcon } from "./styles";

const Post = (props) => {
  return (
    <>
      <Posts onClick={props.getDetails} key={props.posts.id}>
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
