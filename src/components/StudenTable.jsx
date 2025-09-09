import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "rgba(94, 94, 94, 0.47)",
    backdropFilter: "blur(5px)",
    color: "white",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
    backdropFilter: "blur(5px)",
    backgroundColor: "rgba(94, 94, 94, 0.47)",
    color: "white",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "rgba(94, 94, 94, 0.47)",
    backdropFilter: "blur(5px)",
  },
  "&:last-child td, &:last-child th": {
    backdropFilter: "blur(5px)",
    border: 0,
    backgroundColor: "rgba(94, 94, 94, 0.47)",
  },
}));

const Students = ({ students }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const studentSort = [...students].sort(
    (a, b) => b.total_grade - a.total_grade
  );

  if (isMobile) {
    // 📱 Mobile card view
    return (
      <Box display="flex" flexDirection="column" gap={2}>
        {studentSort.map((student) => (
          <Box
            key={student.id}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              p: 2,
              borderRadius: "12px",
              backgroundColor: "rgba(94, 94, 94, 0.47)",
              color: "white",
              backdropFilter: "blur(5px)",
            }}
          >
            <img
              src={student.img}
              alt={student.name}
              style={{ width: 50, height: 50, borderRadius: "50%" }}
            />
            <Box flex={1}>
              <Typography variant="subtitle1">{student.name}</Typography>
              <Typography variant="body2">
                Ball: {student.total_grade}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    );
  }

  // 🖥 Desktop table view
  return (
    <TableContainer component={Paper} sx={{ background: "transparent" }}>
      <Table sx={{ minWidth: 700 }} aria-label="students table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Rasm</StyledTableCell>
            <StyledTableCell>Ism</StyledTableCell>
            <StyledTableCell align="right">Umumiy Ball</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentSort.map((student) => (
            <StyledTableRow key={student.id}>
              <StyledTableCell>
                <img
                  src={student.img}
                  alt={student.name}
                  style={{ width: 50, height: 50, borderRadius: "50%" }}
                />
              </StyledTableCell>
              <StyledTableCell>{student.name}</StyledTableCell>
              <StyledTableCell align="right">
                {student.total_grade}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Students;
