import React from "react";
import { Container } from "@material-ui/core";

import classes from "./section3.module.css";

const Section3 = () => {
  return (
    <Container>
      <div className={classes.MainContainer}>
        <div className={classes.TopContainer}>
          <h2 className={classes.Heading}>Featured destinations</h2>
          <p className={classes.Para}>View all &#x0003E;</p>
        </div>
        <div className={classes.GaleryContainer}>
          <img src="/assets/img/Raja.png" />
          <img src="/assets/img/Fanjingshan.png" />
          <img src="/assets/img/Vevey.png" />
          <img src="/assets/img/Skadar.png" />
        </div>
      </div>
    </Container>
  );
};

export default Section3;
