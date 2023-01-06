import { Card, Stack, Box, Typography, Rating } from "@mui/material";
import React from "react";

function GridView({ image, brand, price, rating, discount }) {
  return (
    <Card
      sx={{
        padding: 1,
        border: "1px solid #d3e1ea",
        width: 200,
        height: 280,
        borderRadius: 2,
      }}
    >
      <Stack direction="column" spacing={2}>
        <img src={image} alt={brand} width="100%" height="150px" />
        <Stack
          direction="column"
          spacing={1}
          alignItems="left"
          justifyContent="left"
        >
          <Typography variant="body" sx={{ fontWeight: "bold" }}>
            {brand}
          </Typography>
          <Typography variant="body" sx={{ fontWeight: "bold" }}>
            {price} /-
          </Typography>
          <Rating name="read-only" value={rating} readOnly />
          <Typography variant="body">{discount} %</Typography>
        </Stack>
      </Stack>
    </Card>
  );
}

export default GridView;
