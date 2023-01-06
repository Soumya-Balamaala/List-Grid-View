import {
  Box,
  Typography,
  Stack,
  Tooltip,
  IconButton,
  Paper,
  TablePagination,
  TableRow,
  TableCell,
} from "@mui/material";
import { FiList, FiGrid, FiArrowRight } from "react-icons/fi";
import React, { useState, useEffect } from "react";

import GridView from "./GridView";
import ListView from "./ListView";
import { getProducts } from "../API/Dummy";

function ComponentView() {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [ViewType, SetViewType] = useState(false);

  const handleClick = () => SetViewType(!ViewType);

  // ---------------------------------------------------------------- Pagination

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - Products.length) : 0;

  //  --------------------------------------------------------

  return (
    <Stack
      direction="column"
      spacing={5}
      alignItems="center"
      sx={{ fontFamily: "Roboto Condensed" }}
    >
      <Box
        sx={{
          width: "100%",
          height: "10vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{ pl: 3, fontFamily: "Roboto Condensed", fontWeight: "bold" }}
        >
          {ViewType ? "Grid View" : "List View"}
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          sx={{ pr: 3, fontFamily: "Roboto Condensed" }}
        >
          <Typography
            variant="'body"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Change View type
            <FiArrowRight style={{ marginLeft: "5px" }} />
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            onClick={handleClick}
            sx={{
              border: "3px solid #3ac5ba",
              padding: 1,
              borderRadius: 2,
              cursor: "pointer",
            }}
          >
            {ViewType ? <FiGrid /> : <FiList />}
            <Typography variant="body">
              {ViewType ? "Grid View" : "List View"}
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <Box>
        <TablePagination
          sx={{ fontFamily: "Roboto Condensed" }}
          rowsPerPageOptions={[3, 6, 9]}
          component="div"
          count={Products.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{
          width: "80%",
          height: "auto",
          boxShadow: 3,
          flexWrap: "wrap",
          padding: 2,
          marginBottom: 5,
        }}
        component={Paper}
      >
        {Products.length === 0 ? (
          <Typography>No Data Available</Typography>
        ) : (
          (rowsPerPage > 0
            ? Products.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : Products
          ).map((item, index) => (
            <Box key={index} sx={{ padding: 1 }}>
              {ViewType ? (
                <GridView
                  image={item.thumbnail}
                  brand={item.brand}
                  rating={item.rating}
                  price={item.price}
                  discount={item.discountPercentage}
                />
              ) : (
                <ListView image={item.thumbnail} brand={item.brand} />
              )}
            </Box>
          ))
        )}
      </Stack>
      <Box>&nbsp;</Box>
    </Stack>
  );
}

export default ComponentView;
