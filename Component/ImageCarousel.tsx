import React from "react";
import Carousel from "react-material-ui-carousel";
import styles from "./ImageCarousel.module.css";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
} from "@mui/material";

const ImageCarousel = () => {
  return (
    <div style={{ marginTop: "50px", color: "#494949" }}>
      <Typography variant="h4">Image Carousel</Typography>
      <br />
      <Carousel className="Example">
        {items.map((item, index) => {
          return (
            <Banner
              item={item}
              key={index}
              contentPosition={item.contentPosition}
            />
          );
        })}
      </Carousel>
      <br />
    </div>
  );
};

type Item = {
  Name: string;
  Caption: string;
  contentPosition: "left" | "right" | "middle";
  Items: { Name: string; Image: string }[];
};

interface BannerProps {
  item: Item;
  contentPosition: "left" | "right" | "middle";
  length?: number;
}

const Banner = (props: BannerProps) => {
  const contentPosition = props.contentPosition
    ? props.contentPosition
    : "left";
  const totalItems: number = props.length ? props.length : 3;
  const mediaLength = totalItems - 1;

  let items = [];
  const content = (
    <Grid item xs={4} key="content">
      <CardContent className={styles.content}>
        <Typography className={styles.title}>{props.item.Name}</Typography>

        <Typography className={styles.caption}>{props.item.Caption}</Typography>

        <Button variant="outlined" className={styles["view-button"]}>
          View Now
        </Button>
      </CardContent>
    </Grid>
  );

  for (let i = 0; i < mediaLength; i++) {
    const item = props.item.Items[i];

    const media = (
      <Grid item xs={4} key={item.Name}>
        <CardMedia
          className={styles["media"]}
          image={item.Image}
          title={item.Name}
        >
          <Typography className={styles["media-caption"]}>
            {item.Name}
          </Typography>
        </CardMedia>
      </Grid>
    );

    items.push(media);
  }

  if (contentPosition === "left") {
    items.unshift(content);
  } else if (contentPosition === "right") {
    items.push(content);
  } else if (contentPosition === "middle") {
    items.splice(items.length / 2, 0, content);
  }

  return (
    <Card raised className={styles["banner"]}>
      <Grid container spacing={0} className={styles["banner-grid"]}>
        {items}
      </Grid>
    </Card>
  );
};

const items: Item[] = [
  {
    Name: "Automobile",
    Caption: "Go for a long drive with your friends!",
    contentPosition: "left",
    Items: [
      {
        Name: "Car",
        Image: "https://source.unsplash.com/featured/?car",
      },
      {
        Name: "Truck",
        Image: "https://source.unsplash.com/featured/?truck",
      },
    ],
  },
  {
    Name: "Nature",
    Caption: "Feel the fragnance of fresh Air!",
    contentPosition: "middle",
    Items: [
      {
        Name: "Waterfall",
        Image: "https://source.unsplash.com/featured/?waterfall",
      },
      {
        Name: "Forest",
        Image: "https://source.unsplash.com/featured/?forest",
      },
    ],
  },
  {
    Name: "Social Media",
    Caption: "Enjoy chatting and posting updates on social media!",
    contentPosition: "right",
    Items: [
      {
        Name: "Smartphone",
        Image: "https://source.unsplash.com/featured/?smartphone",
      },
      {
        Name: "Laptop",
        Image: "https://source.unsplash.com/featured/?laptop",
      },
    ],
  },
];

export default ImageCarousel;
