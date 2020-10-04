import React, { useEffect, useState } from "react";
import axios from "axios";
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

  const putVotes = (direction, postId) => {
    const token = window.localStorage.getItem("token");
    const body = {
      direction: direction,
    };
    axios
      .put(`${baseUrl}/posts/${postId}/vote`, body, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        getPosts();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {posts.map((post) => {
        return (
          <Posts key={post.id}>
            <Typography variant="h6">{post.username}</Typography>
            <BoxComents>
              <Typography variant="body1">{post.text}</Typography>
            </BoxComents>
            <BoxIcons>
              <SpaceIcon>
                <Typography variant="h6">{post.votesCount}</Typography>
                <CloudUploadRoundedIcon
                  onClick={() => putVotes(+1, post.id)}
                  style={{ cursor: "pointer" }}
                />
                <CloudDownloadRoundedIcon
                  onClick={() => putVotes(-1, post.id)}
                  style={{ cursor: "pointer" }}
                />
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
