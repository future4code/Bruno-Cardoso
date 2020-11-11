import React, { useEffect, useState } from "react";
import { Button, TextField, Typography } from "@material-ui/core";
import CloudDownloadRoundedIcon from "@material-ui/icons/CloudDownloadRounded";
import CloudUploadRoundedIcon from "@material-ui/icons/CloudUploadRounded";
import { FormPosts, MainContainer, PopularPosts } from "../FeedPosts/styles";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../services/getRequests";
import Header from "../../components/Header/Header";
import { BoxComents, BoxIcons } from "../../components/Post/styles";
import {
  PostsPostPage,
  SpaceComentPostPage,
  SpaceIconPostPage,
} from "./styles";
import useForm from "../../hooks/useForm";

const PostPage = () => {
  const [postDetails, setPostDetails] = useState({ comments: [] });
  const [form, onChangeInput] = useForm({
    text: "",
  });
  const [newComment, setNewComment] = useState([]);
  const params = useParams();

  useEffect(() => {
    getPostDetails();
  }, []);

  const getPostDetails = () => {
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

  const createPostComment = () => {
    const token = window.localStorage.getItem("token");
    const body = {
      text: form.text,
    };
    axios
      .post(`${baseUrl}/posts/${params.postId}/comment`, body, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log(response);
        getPostDetails();
        setNewComment("");
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
          {postDetails.comments.map((comment) => {
            return (
              <PostsPostPage>
                <Typography variant="h6">{comment.username}</Typography>
                <BoxComents>
                  <Typography variant="h6">{comment.text}</Typography>
                </BoxComents>
              </PostsPostPage>
            );
          })}
        </PopularPosts>
        <FormPosts onSubmit={createPostComment}>
          <TextField
            label="Escreva um Comentário"
            multiline
            type="text"
            variant="outlined"
            value={form["text"]}
            name="text"
            onChange={onChangeInput}
          />

          <Button
            type="submit"
            onClick={createPostComment}
            variant="contained"
            color="primary"
          >
            CRIAR COMENTÁRIIO
          </Button>
        </FormPosts>
      </MainContainer>
    </>
  );
};

export default PostPage;
