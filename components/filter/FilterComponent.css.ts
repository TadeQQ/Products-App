import { style } from "@vanilla-extract/css";

export const container = style({
  margin: "auto",
  width: "50%",
  border: "solid 1px",
  borderColor: "white",
  padding: "20px 10px",
  display: "flex",
  justifyContent: "space-around",
});

export const button = style({
  border: "solid 1px",
  borderColor: "white",
  padding: "10px",
  backgroundColor: "black",
  ":hover": {
    backgroundColor: "gray",
    cursor: "pointer",
  },
  ":active": {
    transform: "scale(0.94)",
  },
});
