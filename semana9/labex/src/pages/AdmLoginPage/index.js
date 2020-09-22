import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../../components/Header/Header";
import { Button } from "../../components/Header/styles";
import useForm from "../../hooks/useForm";
import { baseUrl } from "../../requisitions/apiRequisitions";
import { Container } from "../HomePage/styles";
import { Box, Form, Input } from "./styles";

const AdmLoginPage = () => {
  const history = useHistory();
  const [form, onChangeInput] = useForm({
    email: "",
    password: "",
  });

  const onSubmition = (event) => {
    event.preventDefault();
    const body = {
      email: form.email,
      password: form.password,
    };
    axios
      .post(`${baseUrl}/login`, body)
      .then((response) => {
        window.localStorage.setItem("token", response.data.token);
        history.push("/viagens");
      })
      .catch((error) => {
        alert("Senha ou e-mail invalido! 🤔");
      });
  };

  return (
    <>
      <Header />
      <Container>
        <Form onSubmit={onSubmition}>
          <Input
            placeholder="Exemplo123@email.com"
            type="email"
            onChange={onChangeInput}
            value={form["email"]}
            name={"email"}
          />
          <Input
            placeholder="Senha"
            type="password"
            onChange={onChangeInput}
            value={form["password"]}
            name={"password"}
          />
          <Box>
            <Button type={"submit"}>Login</Button>
          </Box>
        </Form>
      </Container>
    </>
  );
};

export default AdmLoginPage;
