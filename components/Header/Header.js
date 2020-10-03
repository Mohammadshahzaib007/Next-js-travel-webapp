import React from "react";
import { Container, Button, makeStyles, createStyles } from "@material-ui/core";

import classes from "./header.module.css";

const useStyles = makeStyles({
  btnBorder: {
    fontFamily: `'Playfair Display", serif`,
    textTransform: "unset",
    borderColor: "#FB8F1D",
    color: "#FB8F1D",
    marginRight: "18px",
  },
  btnBg: {
    fontFamily: `'Playfair Display", serif`,
    backgroundColor: "#FB8F1D",
    color: "#ffffff",
    boxShadow: "none",
    textTransform: "unset",
  },
});

const Header = () => {
  const classesMui = useStyles();
  return (
    <Container>
      <header className={classes.Header}>
        <nav className={classes.MainContainer}>
          <div className={classes.LogoContainer}>
            <img src="/assets/img/logo.png" />
          </div>
          <div className={classes.NavItemContainer}>
            <ul className={classes.NavItems}>
              <li className={classes.NavItem}>
                <a style={{ color: "black" }} href="#">
                  Home
                </a>
              </li>
              <li className={classes.NavItem}>
                <a href="#">Destination</a>
              </li>
              <li className={classes.NavItem}>
                <a href="#">About</a>
              </li>
              <li className={classes.NavItem}>
                <a href="#">Partner</a>
              </li>
            </ul>
            <div className={classes.BtnContainer}>
              <Button
                className={classesMui.btnBorder}
                style={{
                  fontFamily: `'Playfair Display", serif`,
                  textTransform: "unset",
                  borderColor: "#FB8F1D",
                  color: "#FB8F1D",
                  marginRight: "18px",
                }}
                variant="outlined"
              >
                Log in
              </Button>
              <Button
                className={classesMui.btnBg}
                variant="contained"
                style={{
                  fontFamily: `'Playfair Display", serif`,
                  backgroundColor: "#FB8F1D",
                  color: "#ffffff",
                  boxShadow: "none",
                  textTransform: "unset",
                }}
              >
                Register
              </Button>
            </div>
          </div>
        </nav>

        <div className={classes.HeaderContainer}>
          {/* <img className={classes.Element} src="/assets/img/element2.png" /> */}
          <div className={classes.ContentContainer}>
            <div className={classes.HeadingContainer}>
              <h1 className={classes.Heading}>Explore and Travel</h1>
            </div>
            <div className={classes.HolidayFinderContainer}>
              <h2 className={classes.HolidayFinderHeading}>Holiday finder</h2>
              <span className={classes.BorderBottom}></span>
              <div className={classes.SelectorContainer}>
                <select className={classes.Select}>
                  <option disabled selected>
                    Location
                  </option>
                  <option value="Rampur">Rampur</option>
                </select>
                <select className={classes.Select}>
                  <option disabled selected>
                    Activity
                  </option>
                  <option value="Rampur">Rampur</option>
                </select>
                <select className={classes.Select}>
                  <option disabled selected>
                    Grade
                  </option>
                  <option value="Rampur">Rampur</option>
                </select>
                <select className={classes.Select}>
                  <option disabled selected>
                    Date
                  </option>
                  <option value="Rampur">Rampur</option>
                </select>
              </div>
              <Button
                style={{
                  width: "180px",
                  height: "52px",
                  fontFamily: `"Inter", sans-serif`,
                  fontWeight: "500",
                  backgroundColor: "#FB8F1D",
                  color: "#ffffff",
                  borderRadius: "8px",
                  fontSize: "17px",
                  boxShadow: "none",
                  textTransform: "unset",
                }}
                variant="contained"
              >
                Explore
              </Button>
            </div>
          </div>
          <div className={classes.IllustrationContainer}>
            <img
              className={classes.Illustration}
              src="/assets/illustrations/thousand-01.png"
            />
          </div>
        </div>
      </header>
    </Container>
  );
};

export default Header;
