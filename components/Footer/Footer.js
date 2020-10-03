import React from "react";
import { Container } from "@material-ui/core";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.FooterCtn}>
      <Container>
        <div className={classes.MainContainer}>
          <div className={classes.LinkContainer}>
            <div className={classes.ContentContainer}>
              <img src="/assets/img/logo.png" />
              <p className={classes.Para}>
                Plan and book your perfect trip with expert advice, travel tips
                destination information from us
              </p>
              <p className={classes.Para} style={{ fontSize: "17px" }}>
                ©2020 Thousand Sunny. All rights reserved
              </p>
            </div>

            <div className={classes.ContentContainer}>
              <h3 className={classes.Heading}>Destinations</h3>
              <a className={classes.Link} href="#">
                Africa
              </a>
              <a className={classes.Link} href="#">
                Antarctica
              </a>
              <a className={classes.Link} href="#">
                Asia
              </a>
              <a className={classes.Link} href="#">
                Europe
              </a>
              <a className={classes.Link} href="#">
                America
              </a>
            </div>

            <div className={classes.ContentContainer}>
              <h3 className={classes.Heading}>Shop</h3>
              <a className={classes.Link} href="#">
                Destination Guides
              </a>
              <a className={classes.Link} href="#">
                Pictorial & Gifts
              </a>
              <a className={classes.Link} href="#">
                Special Offers
              </a>
              <a className={classes.Link} href="#">
                Delivery Times
              </a>
              <a className={classes.Link} href="#">
                FAQs
              </a>
            </div>

            <div className={classes.ContentContainer}>
              <h3 className={classes.Heading}>Interests</h3>
              <a className={classes.Link} href="#">
                Adventure Travel
              </a>
              <a className={classes.Link} href="#">
                Art And Culture
              </a>
              <a className={classes.Link} href="#">
                Wildlife And Nature
              </a>
              <a className={classes.Link} href="#">
                Family Holidays
              </a>
              <a className={classes.Link} href="#">
                Food And Drink
              </a>
            </div>
          </div>
          <span className={classes.Span}></span>
          <img src="/assets/img/socialmedia.png" style={{width: '248.01px', margin: '30px'}}/>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
