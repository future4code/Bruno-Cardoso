import React from "react";
import labedditlogo from "../../assets/labedditlogo.svg";
import { Button, Link, TextField, Typography } from "@material-ui/core";
import { Form, LinkTo, Logo, MainContainer } from "./styled";

const HomePage = () => {
  return (
    <>
      <MainContainer>
        <Logo src={labedditlogo} alt={"logo labeddit"} />
        <Form>
          <TextField label="E-mail" variant="outlined" type="email" />
          <TextField label="Senha" variant="outlined" type="password" />
          <Button variant="contained" color="primary">
            Entrar
          </Button>
        </Form>
        <Typography variant="body1">
          Ou então <LinkTo variant="body1"> cadastre-se</LinkTo>
        </Typography>
      </MainContainer>
    </>
  );
};

export default HomePage;
