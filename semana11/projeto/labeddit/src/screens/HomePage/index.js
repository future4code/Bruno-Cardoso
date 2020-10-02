import React from "react";
import labedditlogo from "../../assets/labedditlogo.svg";
import { Button, TextField, Typography } from "@material-ui/core";
import { Form, LinkTo, Logo, MainContainer } from "./styles";
import { Link as RouterLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

const PaginaCadastro = React.forwardRef((props, ref) => (
  <RouterLink ref={ref} to="/cadastre-se" {...props} />
));

const HomePage = () => {
  const history = useHistory();
  return (
    <>
      <MainContainer>
        <Logo src={labedditlogo} alt={"logo labeddit"} />
        <Typography variant="h6">Faça já seu Login</Typography>
        <Form>
          <TextField label="E-mail" variant="outlined" type="email" />
          <TextField label="Senha" variant="outlined" type="password" />
          <Button variant="contained" color="primary">
            Entrar
          </Button>
        </Form>
        <Typography variant="body1">
          Ou{" "}
          <LinkTo variant="body1" component={PaginaCadastro}>
            {" "}
            cadastre-se
          </LinkTo>
        </Typography>
      </MainContainer>
    </>
  );
};

export default HomePage;
