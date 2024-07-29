/* eslint-disable */
import { Grid, styled } from "@mui/material";

export const ProductContainer = styled(Grid)(
  ({ theme }) => `
    height: 83dvh;
    overflow-y: scroll;
    scroll-snap-type: both  mandatory;
    &::-webkit-scrollbar {
        width: 8px;
    }
    &::-webkit-scrollbar-track {
        background-color: #f1f1f1;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 4px;
    }
    &::-webkit-scrollbar-thumb:hover {
        background-color: #555;
    }
`
);
