import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Link, useLocation } from "react-router-dom";

const Navbar = (prop) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const location = useLocation();
  return (
    <Box
      sx={{
        background: "rgba(94, 94, 94, 0.41)",
        padding: "30px 0px",
        backdropFilter: "blur(5px)",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid
            size={{ md: 3, sm: 3, xs: 4 }}
            sx={{ display: "flex", alignItems: "center", gap: "20px" }}
          >
            <Typography
              variant="h4"
              color="white"
              fontSize={matches ? "50px" : "20px"}
            >
              WebStudy
            </Typography>
          </Grid>
          <Grid size={{ md: 3, sm: 3, xs: 4 }}>
            {location.pathname === "/" ? (
              <Link
                to={"/students"}
                style={{ textDecoration: "none", color: "currentcolor" }}
              >
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ fontSize: matches ? "20px" : "10px" }}
                >
                  O'quvchilar
                </Button>
              </Link>
            ) : (
              <Link
                to={"/"}
                style={{ textDecoration: "none", color: "currentcolor" }}
              >
                <Button variant="contained">Ortga</Button>
              </Link>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Navbar;
