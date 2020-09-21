import React from "react";
import Header from "../../components/Header/Header";
import { Button } from "../../components/Header/styles";
import { Container } from "../HomePage/styles";
import { Box, Form, Input } from "./styles";

const AdmLoginPage = () => {
  return (
    <>
      <Header />
      <Container>
        <Form>
          <Input placeholder="Exemplo123@email.com" type="text" />
          <Input placeholder="Senha" type="password" />
          <Box>
            <Button type="submit">Login</Button>
          </Box>
        </Form>
      </Container>
    </>
  );
};

export default AdmLoginPage;
