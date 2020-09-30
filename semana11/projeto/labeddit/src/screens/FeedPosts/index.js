import {
  AppBar,
  Button,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import labedditlogo from "../../assets/labedditlogo.svg";
import {
  LogoHeader,
  BoxLogo,
  MainContainer,
  FormPosts,
  PopularPosts,
  Posts,
} from "./styled";

const FeedPosts = () => {
  return (
    <>
      <AppBar position="static">
        <BoxLogo>
          <IconButton edge="start" color="inherit">
            <MenuIcon />
            <LogoHeader src={labedditlogo} alt={"logo labeddit"} />
          </IconButton>
          <Button color="inherit">Logout</Button>
        </BoxLogo>
      </AppBar>
      <MainContainer>
        <Typography variant="h4">Posts populares</Typography>
        <FormPosts>
          <TextField label="Escreva seu Post" multiline variant="outlined" />
          <Button variant="contained" color="primary">
            CRIAR POST
          </Button>
        </FormPosts>
        <PopularPosts>
          <Posts>Post1</Posts>
          <Posts>Post2</Posts>
          <Posts>Post3</Posts>
        </PopularPosts>
      </MainContainer>
    </>
  );
};

export default FeedPosts;
