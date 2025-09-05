import { Box, Typography } from "@mui/material";
import React from "react";

const WeekStudents = ({ topStudent }) => {
  return (
    <Box
      sx={{
        position: "relative", // orqa fon va ustidagi narsalarni joylashtirish uchun
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "300px", // balandlik berib qo‘yamiz
        overflow: "hidden",
      }}
    >
      {/* Orqa fon GIF */}
      <Box
        component="img"
        src="/win.gif"
        alt="celebration"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />

      {/* Ustidagi kontent */}
      <Box sx={{ zIndex: 1, textAlign: "center" }}>
        <Box
          component="img"
          src={topStudent.img}
          alt={topStudent.name}
          sx={{ width: "150px", borderRadius: "50%" }}
        />
        <Typography fontSize="28px" color="white">
          {topStudent.name}
        </Typography>
        <Typography fontSize="28px" color="white">
          {topStudent.total_grade} ball
        </Typography>
      </Box>
    </Box>
  );
};

export default WeekStudents;
