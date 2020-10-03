import React from "react";
import { Container, Button } from "@material-ui/core";

import classes from "./section2.module.css";

const Section2 = () => {
  return (
    <Container>
      <div className={classes.MainContainer}>
        <div className={classes.IllustrationContainer}>
          <img
            className={classes.Illustration}
            src="/assets/illustrations/thousand-02.png"
          />
        </div>
        <div className={classes.ContentContainer}>
          <h1 className={classes.Heading}>A new way to explore the world </h1>
          <p className={classes.Para}>
            For decades travellers have reached for Lonely Planet books when
            looking to plan and execute their perfect trip, but now, they can
            also let Lonely Planet Experiences lead the way
          </p>
          <Button
            style={{
              width: "180px",
              height: "52px",
              fontFamily: `"Inter", sans-serif`,
              fontWeight: "500",
              backgroundColor: "#FB8F1D",
              color: "#ffffff",
              borderRadius: "8px",
              fontSize: "16px",
              boxShadow: "none",
              textTransform: "unset",
            }}
            variant="contained"
          >
            Learn more
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Section2;
