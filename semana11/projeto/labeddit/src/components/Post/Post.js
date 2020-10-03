import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom/";
import { baseUrl } from "../../services/getRequests";
import { Typography } from "@material-ui/core";
import CloudDownloadRoundedIcon from "@material-ui/icons/CloudDownloadRounded";
import CloudUploadRoundedIcon from "@material-ui/icons/CloudUploadRounded";
import { BoxIcons, Posts, BoxComents, SpaceComent, SpaceIcon } from "./styles";

const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    axios
      .get(`${baseUrl}/posts`, {
        headers: {
          authorization: window.localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setPosts(response.data.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
        {posts.map((post) => {
          return (
            <Posts>
              <Typography variant="h6">{post.username}</Typography>
              <BoxComents>
                <Typography variant="body1">{post.text}</Typography>
              </BoxComents>
              <BoxIcons>
                <SpaceIcon>
                  <CloudUploadRoundedIcon style={{ cursor: "pointer" }} />
                  <Typography variant="h6">{post.votesCount}</Typography>
                  <CloudDownloadRoundedIcon style={{ cursor: "pointer" }} />
                </SpaceIcon>
                <SpaceComent>
                  <Typography variant="h6">
                    {post.commentsCount} comentários
                  </Typography>
                </SpaceComent>
              </BoxIcons>
            </Posts>
          );
        })}
    </>
  );
};

export default Post;
