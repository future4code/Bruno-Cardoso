import React, { useState } from "react";
import labedditlogo from "../../assets/labedditlogo.svg";
import Post from "../../components/Post/Post";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import {
  LogoHeader,
  BoxLogo,
  MainContainer,
  FormPosts,
  PopularPosts,
} from "./styles";
import { AppBar, Button, TextField, Typography } from "@material-ui/core";

const FeedPosts = () => {
  return (
    <>
      <AppBar position="static">
        <BoxLogo>
          <LogoHeader src={labedditlogo} alt={"logo labeddit"} />

          <Button color="inherit">Logout</Button>
        </BoxLogo>
      </AppBar>
      <MainContainer>
        <Typography variant="h3">Posts populares</Typography>
        <FormPosts>
          <TextField label="Escreva seu Post" multiline variant="outlined" />
          <Button variant="contained" color="primary">
            CRIAR POST
          </Button>
        </FormPosts>
        <PopularPosts>
          <Post />
        </PopularPosts>
      </MainContainer>
    </>
  );
};

export default FeedPosts;
