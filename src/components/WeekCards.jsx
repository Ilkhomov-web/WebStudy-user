import { Grid, Typography } from "@mui/material";
import React from "react";
import WeekStudents from "./weekStundet/WeekStudents";
import { studentsData } from "../data/StudentsData";

import { motion } from "framer-motion";

const WeekCards = () => {
  const topStudent = studentsData.reduce((prev, current) =>
    current.total_grade > prev.total_grade ? current : prev
  );

  return (
    <Grid container spacing={2}>
      <Grid
        size={{ md: 8, sm: 12, xs: 12 }}
        sx={{
          p: 3,
          borderRadius: 2,
          boxShadow: 2,
          background: "rgba(94, 94, 94, 0.47)",
          backdropFilter: "blur(5px)",
          marginTop: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              background: "linear-gradient(90deg, #FFD700, #FF8C00, #FFD700)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontWeight: "bold",
              textAlign: "center",
              textShadow: "0px 0px 15px rgba(255, 215, 0, 0.8)",
            }}
          >
            Haftaning Eng Yaxshi O'quvchisi !!!
          </Typography>
        </motion.div>
      </Grid>
      <Grid
        size={{ md: 4, sm: 12, xs: 12 }}
        sx={{
          p: 3,
          borderRadius: 2,
          boxShadow: 2,
          background: "rgba(94, 94, 94, 0.47)",
          backdropFilter: "blur(5px)",
          marginTop: "20px",
        }}
      >
        <WeekStudents topStudent={topStudent} />
      </Grid>
    </Grid>
  );
};

export default WeekCards;
