import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { studentsData } from "../../data/StudentsData";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const PieCharts = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <PieChart
      series={[
        {
          data: studentsData.map((student) => ({
            id: student.id,
            value: student.total_grade,
            label: student.name,
          })),
        },
      ]}
      width={matches ? 400 : 200}
      height={300}
      sx={{
        display: "flex",
        flexDirection: matches ? "row" : "column",
        "& .MuiChartsLegend-root": {
          color: "#fff",
          fontSize: "18px",
        },
      }}
    />
  );
};

export default PieCharts;
