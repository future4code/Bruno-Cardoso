import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import logo from "../../assets/logolabex.svg";
import { MainHeader, Logo, Button, Container } from "./styles";

const Header = () => {
  return (
    <>
      <MainHeader>
        <Container>
          <Logo src={logo} alt="logo labeX" />
          <Link to={"/login"}>
            <Button>Login</Button>
          </Link>
        </Container>
      </MainHeader>
    </>
  );
};

export default Header;
