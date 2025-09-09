import { Grid } from "@mui/material";
import React from "react";
import DataCard from "../DataCard";
import { studentsData } from "../../data/StudentsData";

const DataCards = () => {
  const topStudent = studentsData.reduce((max, student) =>
    student.total_grade > max.total_grade ? student : max
  );

  return (
    <Grid container spacing={2} sx={{ marginTop: "20px" }}>
      <Grid size={{ md: 6, sm: 12, xs: 12 }}>
        <DataCard title="Total Students" value={studentsData.length} />
      </Grid>
      <Grid size={{ md: 6, sm: 12, xs: 12 }}>
        <DataCard
          title="Top Student"
          value={`${topStudent.name} ${topStudent.total_grade} ball`}
        />
      </Grid>
    </Grid>
  );
};

export default DataCards;
