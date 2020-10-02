import React from "react";
import { Container } from "@material-ui/core";

import classes from "./section5.module.css";

export const Section5 = () => {
  return (
    <Container>
      <div className={classes.MainContainer}>
        <div className={classes.TopHeadingContainer}>
          <h1 className={classes.Heading}>Testimonials</h1>
        </div>
        <div className={classes.TestimonialContainer}>
          <div className={classes.TextContainer}>
            <img className={classes.Stars} src="/assets/img/stars.png" />
            <p className={classes.Para}>
              “Quisque in lacus a urna fermentum euismod. Integer mi nibh,
              dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit
              amet turpis nec”
            </p>
            <p className={classes.Name}>Edward Newgate</p>
            <p className={classes.NameSpan}>Founder Circle</p>
          </div>
          <div className={classes.ImgContainer}>
            <img src="/assets/img/photo.png" />
          </div>
        </div>
      </div>
    </Container>
  );
};
