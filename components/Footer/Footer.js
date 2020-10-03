import React from "react";
import { Container } from "@material-ui/core";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.FooterCtn}>
      <Container>
        <div className={classes.MainContainer}>
          <div className={classes.LinkContainer}>shahzaib</div>
        </div>
      </Container>
    </footer>
  );
};
export default Footer
