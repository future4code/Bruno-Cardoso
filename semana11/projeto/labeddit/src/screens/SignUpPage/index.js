import React from "react";
import { Form, LinkTo, Logo, MainContainer } from "../HomePage/styled";
import labedditlogo from "../../assets/labedditlogo.svg";
import { Button, TextField, Typography } from "@material-ui/core";

const SignUpPage = () => {
  return (
    <>
      <MainContainer>
        <Logo src={labedditlogo} alt={"logo labeddit"} />
        <Typography variant="h6">Cadastre-se já</Typography>
        <Form>
          <TextField label="Nome de Usuário" variant="outlined" type="text" />
          <TextField label="E-mail" variant="outlined" type="email" />
          <TextField label="Senha" variant="outlined" type="password" />
          <Button variant="contained" color="primary">
            Entrar
          </Button>
        </Form>
        <Typography variant="body1">
          Faça o<LinkTo variant="body1"> Login</LinkTo>
        </Typography>
      </MainContainer>
    </>
  );
};

export default SignUpPage;
