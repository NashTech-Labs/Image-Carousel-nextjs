import React from "react";
import ImageCarousel from "../../Component/ImageCarousel";
import { Grid } from "@mui/material";

export default function Home() {
  return (
    <Grid container justifyContent="center">
      <Grid item lg={8}>
        <ImageCarousel />
      </Grid>
    </Grid>
  );
}
