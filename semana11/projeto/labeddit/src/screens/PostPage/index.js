import React from "react";
import { AppBar, Button, TextField, Typography } from "@material-ui/core";
import labedditlogo from "../../assets/labedditlogo.svg";
import {
  BoxLogo,
  FormPosts,
  LogoHeader,
  MainContainer,
  PopularPosts,
} from "../FeedPosts/styles";

const PostPage = () => {
  return (
    <>
      <AppBar position="static">
        <BoxLogo>
          <LogoHeader src={labedditlogo} alt={"logo labeddit"} />

          <Button color="inherit">Logout</Button>
        </BoxLogo>
      </AppBar>
      <MainContainer>
        <Typography variant="h3">Comentar Posts</Typography>
        <PopularPosts></PopularPosts>
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
