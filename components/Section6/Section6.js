import React from "react";
import { Container } from "@material-ui/core";

import classes from "./section6.module.css";
import Card from "../UI/Card";

export const Section6 = () => {
  return (
    <Container>
      <div className={classes.MainContainer}>
        <div className={classes.TopContainer}>
          <h2 className={classes.Heading}>Trending stories</h2>
          <p className={classes.Para}>View all &#x0003E;</p>
        </div>
        <div className={classes.StoryContainer}>
          <Card
            src="/assets/img/MaskGroup.png"
            heading="The many benefits of taking a healing holiday"
            para="‘Helaing holidays’ are on the rise tohelp maximise your health and
            happines..."
          />
          <Card
            src="/assets/img/image13.png"
            heading="The best Kyoto restaurant
            to try Japanese food"
            para="From tofu to teahouses, here’s our guide to Kyoto’s best restaurants
            to visit..."
          />
          <Card
            src="/assets/img/image14.png"
            heading="Skip Chichen Itza and head
            to this remote Yucatan"
            para="It’s remote and challenging to get,
            but braving the jungle and exploring
            these ruins without the..."
          />
          <Card
            src="/assets/img/image15.png"
            heading="Surf’s up at these beginner
            spots around the world"
            para="If learning to surf has in on your to-
            do list for a while, the good news
            is: it’s never too late..."
          />
        </div>
      </div>
    </Container>
  );
};
