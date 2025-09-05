import React from "react";
import Navbar from "../components/Navbar";
import { Box, Container } from "@mui/material";
import DataCards from "../components/dataCards/DataCards";
import Charts from "../components/Charts";
import WeekCards from "../components/WeekCards";

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Container maxWidth="lg">
        <WeekCards />
        <DataCards />
        <Charts />
      </Container>
    </Box>
  );
};

export default Home;
