import React, { useState, useEffect } from "react";
import Post from "../../components/Post/Post";
import useForm from "../../hooks/useForm";
import { baseUrl } from "../../services/getRequests";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { MainContainer, FormPosts, PopularPosts } from "./styles";
import { Button, TextField, Typography } from "@material-ui/core";
import Header from "../../components/Header/Header";

const FeedPosts = (props) => {
  const [posts, setPosts] = useState([]);
  const [form, onChangeInput] = useForm({
    title: "",
    text: "",
  });
  const history = useHistory();

  useEffect(() => {
    getPosts();
  }, [posts]);

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

  const createPost = () => {
    const body = {
      title: form.title,
      text: form.text,
    };
    axios
      .post(`${baseUrl}/posts`, body, {
        headers: {
          authorization: window.localStorage.getItem("token"),
        },
      })
      .then((response) => {
        getPosts();
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const goToPostPage = () => {
    history.push(`/post/${props.post.id}`);
  };

  return (
    <>
      <Header />
      <MainContainer>
        <Typography variant="h3">Posts populares</Typography>
        <FormPosts onSubmit={createPost}>
          <TextField
            label="Titulo do Post"
            variant="outlined"
            value={form["title"]}
            name={"title"}
            onChange={onChangeInput}
          />
          <TextField
            label="Escreva seu Post"
            multiline
            variant="outlined"
            value={form["text"]}
            name={"text"}
            onChange={onChangeInput}
          />
          <Button
            type="submit"
            onClick={createPost}
            variant="contained"
            color="primary"
          >
            CRIAR POST
          </Button>
        </FormPosts>
        <PopularPosts>
          {posts.map((post) => {
            return <Post getPosts={getPosts} key={post.id} posts={post} vote={putVotes} />;
          })}
        </PopularPosts>
      </MainContainer>
    </>
  );
};

export default FeedPosts;
