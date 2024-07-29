/* eslint-disable */
import { Box, Link, styled } from "@mui/material";

export const NavContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  items: "center",
  gap: "1rem",
}));
export const NavLink = styled(Link)(({ theme }) => ({
  display: "flex",
  padding: "10px",
  borderRadius: "8px",
  items: "center",
  gap: "10px",
  transition: "all .2s",
  "&:hover": {
    // color: "black",
    background: "#455861",
  },
}));
