import React from "react";
import { Container, Button } from "@material-ui/core";

import classes from "./section4.module.css";

export const Section4 = () => {
  return (
    <Container>
      <div className={classes.MianContainer}>
        <div className={classes.ContentContainer}>
          <h1 className={classes.heading}>
            Guides by Thousand <br /> Sunny
          </h1>
          <p className={classes.Para}>
            Packed with tips and advice from our on-the-ground experts, our city
            guides app (iOS and Android) is the ultimate resource before and
            during a trip.
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
            Download{" "}
          </Button>
        </div>
        <div className={classes.IllustrationContainer}>
          <img src="/assets/illustrations/thousand-03.png" />
        </div>
      </div>
    </Container>
  );
};
