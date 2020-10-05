import { AppBar, Button } from "@material-ui/core";
import React from "react";
import { BoxLogo, LogoHeader } from "../../screens/FeedPosts/styles";
import labedditlogo from "../../assets/labedditlogo.svg";

const Header = (props) => {
  return (
    <>
      <AppBar position="static">
        <BoxLogo>
          <LogoHeader src={labedditlogo} alt={"logo labeddit"} />
          <Button color="inherit">Logout</Button>
        </BoxLogo>
      </AppBar>
    </>
  );
};

export default Header;
