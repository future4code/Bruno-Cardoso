import React from "react";
import axios from "axios";
import { Link as RouterLink, useHistory } from "react-router-dom";
import labedditlogo from "../../assets/labedditlogo.svg";
import { Button, TextField, Typography } from "@material-ui/core";
import { Form, LinkTo, Logo, MainContainer } from "./styles";
import useForm from "../../hooks/useForm";
import { baseUrl } from "../../services/getRequests";

const PaginaCadastro = React.forwardRef((props, ref) => (
  <RouterLink ref={ref} to="/cadastre-se" {...props} />
));

const HomePage = () => {
  const [form, onChangeInput] = useForm({
    email: "",
    password: "",
  });
  const history = useHistory();

  const handleSubmit = (event) => {
    const body = {
      email: form.email,
      password: form.password,
    };
    axios
      .post(`${baseUrl}/login`, body)
      .then((response) => {
        window.localStorage.setItem("token", response.data.token);
        history.push("/feed");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
    
      <MainContainer>
        <Logo src={labedditlogo} alt={"logo labeddit"} />
        <Typography variant="h6">Faça já seu Login</Typography>
        <Form onSubmit={handleSubmit}>
          <TextField
            label="E-mail"
            variant="outlined"
            type="email"
            value={form["email"]}
            name="email"
            onChange={onChangeInput}
          />
          <TextField
            label="Senha"
            variant="outlined"
            type="password"
            value={form["password"]}
            name="password"
            onChange={onChangeInput}
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
