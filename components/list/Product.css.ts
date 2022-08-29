import { style } from "@vanilla-extract/css";

export const container = style({
  margin: "auto",
  width: "50%",
  border: "solid 1px",
  borderColor: "white",
  padding: "20px 15px",
  marginTop: "20px",
});

export const item = style({
  border: "solid 1px",
  borderColor: "white",
  padding: "20px 15px",
  marginBottom: "20px",
  display: "flex",
  justifyContent: "space-between",
  ":hover": {
    backgroundColor: "gray",
    cursor: "pointer",
  },
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