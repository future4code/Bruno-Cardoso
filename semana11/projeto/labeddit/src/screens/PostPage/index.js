import React, { useEffect, useState } from "react";
import { Button, TextField, Typography } from "@material-ui/core";
import CloudDownloadRoundedIcon from "@material-ui/icons/CloudDownloadRounded";
import CloudUploadRoundedIcon from "@material-ui/icons/CloudUploadRounded";
import { FormPosts, MainContainer, PopularPosts } from "../FeedPosts/styles";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../services/getRequests";
import Header from "../../components/Header/Header";
import { BoxComents, BoxIcons } from "../../components/Post/styles";
import {
  PostsPostPage,
  SpaceComentPostPage,
  SpaceIconPostPage,
} from "./styles";

const PostPage = (props) => {
  const [postDetails, setPostDetails] = useState({ comments: [] });
  const history = useHistory;
  const params = useParams();

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    const token = window.localStorage.getItem("token");
    axios
      .get(` ${baseUrl}/posts/${params.postId}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log(response.data.post);
        setPostDetails(response.data.post);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Header />
      <MainContainer>
        <Typography variant="h3">Comentar Post</Typography>
        <PopularPosts>
          <PostsPostPage>
            <Typography variant="h6">{postDetails.username}</Typography>
            <Typography variant="h6">{postDetails.title}</Typography>
            <BoxComents>
              <Typography variant="body1">{postDetails.text}</Typography>
            </BoxComents>
            <BoxIcons>
              <SpaceIconPostPage>
                <Typography variant="h6">{postDetails.votesCount}</Typography>
                <CloudUploadRoundedIcon style={{ cursor: "pointer" }} />
                <CloudDownloadRoundedIcon style={{ cursor: "pointer" }} />
              </SpaceIconPostPage>
              <SpaceComentPostPage>
                <Typography variant="h6">
                  {postDetails.commentsCount} comentários
                </Typography>
              </SpaceComentPostPage>
            </BoxIcons>
          </PostsPostPage>
        </PopularPosts>
        <FormPosts>
          <TextField
            label="Escreva um Comentário"
            multiline
            variant="outlined"
          />
          <Button variant="contained" color="primary">
            CRIAR COMENTÁRIIO
          </Button>
        </FormPosts>
      </MainContainer>
    </>
  );
};

export default PostPage;
