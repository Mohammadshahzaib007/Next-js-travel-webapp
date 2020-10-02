import React from "react";

import classes from "./card.module.css";

const Card = (props) => {
  return (
    <div className={classes.Card}>
      <div className={classes.CardImgContainer}>
        <img src={props.src} />
      </div>
      <div className={classes.CardContentContainer}>
        <h2 className={classes.Heading}>{props.heading}</h2>
        <p className={classes.Para}>{props.para}</p>
        <a className={classes.Link} href="#">
          Read more
        </a>
      </div>
    </div>
  );
};

export default Card;
