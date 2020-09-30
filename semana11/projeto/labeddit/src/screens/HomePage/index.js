import React from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { Button } from "@material-ui/core";

const HomePage = () => {
  return (
    <>
      <FormControl>
        <TextField label="E-mail" variant="outlined" type="email" />
        <TextField label="Senha" variant="outlined" type="password" />
        <Button variant="contained" color="primary">
          Entrar
        </Button>
      </FormControl>
    </>
  );
};

export default HomePage;
