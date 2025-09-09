import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { students } from "../data/studentsData";
import Students from "../components/StudenTable";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const StudentList = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Box>
      <Navbar />

      <Container maxWidth={"lg"}>
        <Box
          sx={{
            p: 3,
            borderRadius: 2,
            boxShadow: 2,
            background: "rgba(94, 94, 94, 0.47)",
            backdropFilter: "blur(5px)",
            margin: "20px 0px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            fontSize={matches ? "20px" : "20px"}
            color="white"
          >
            Students - {students.length}
          </Typography>

          {/* Search input */}
          <TextField
            placeholder="Search student..."
            variant="outlined"
            size="small"
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
              width: matches ? "250px" : "100px",
            }}
          />
        </Box>

        <Students students={students} />
      </Container>
    </Box>
  );
};

export default StudentList;
