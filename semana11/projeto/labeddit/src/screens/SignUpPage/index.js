import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { baseUrl } from "../../services/getRequests";
import { Form, LinkTo, Logo, MainContainer } from "../HomePage/styles";
import labedditlogo from "../../assets/labedditlogo.svg";

import { Button, TextField, Typography } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const PaginaLogin = React.forwardRef((props, ref) => (
  <RouterLink ref={ref} to="/" {...props} />
));

const SignUpPage = () => {
  const [form, onChangeInput] = useForm({
    email: "",
    password: "",
    username: "",
  });
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    const body = {
      email: form.email,
      password: form.password,
      username: form.username,
    };
    axios
      .post(`${baseUrl}/signup`, body)
      .then((response) => history.push("/feed"))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <MainContainer>
        <Logo src={labedditlogo} alt={"logo labeddit"} />
        <Typography variant="h6">Cadastre-se já</Typography>
        <Form onSubmit={handleSubmit}>
          <TextField
            label="E-mail"
            variant="outlined"
            type="email"
            onChange={onChangeInput}
            value={form["email"]}
            name="email"
          />
          <TextField
            label="Senha"
            variant="outlined"
            type="password"
            onChange={onChangeInput}
            value={form["password"]}
            name="password"
          />
          <TextField
            label="Nome de Usuário"
            variant="outlined"
            type="text"
            onChange={onChangeInput}
            value={form["username"]}
            name="username"
          />
          <Button
            type="submit"
            onClick={handleSubmit}
            variant="contained"
            color="primary"
          >
            Entrar
          </Button>
        </Form>
        <Typography variant="body1">
          Faça o
          <LinkTo variant="body1" component={PaginaLogin}>
            {" "}
            Login
          </LinkTo>
        </Typography>
      </MainContainer>
    </>
  );
};

export default SignUpPage;
