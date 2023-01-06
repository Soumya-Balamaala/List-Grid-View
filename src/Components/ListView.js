import React from "react";
import PropTypes from "prop-types";
import { Avatar, Stack, Typography } from "@mui/material";

function ListView({ image, brand }) {
  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      sx={{
        border: "1px solid #d3e1ea",
        boxShadow: 3,
        borderRadius: 3,
        padding: 1,
        width: 200,
        marginLeft: 2,
        marginBottom: 2,
      }}
    >
      <Avatar variant="square" alt={brand} src={image} />
      <Typography>{brand}</Typography>
    </Stack>
  );
}

export default ListView;
