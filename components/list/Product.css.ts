import { style } from "@vanilla-extract/css";

export const containerR = style({
  margin: "auto",
  width: "70%",
  marginTop: "20px",
});

export const item = style({
  border: "solid 1px",
  borderColor: "white",
  marginBottom: "20px",
  padding: "10px 15px",
  ":hover": {
    backgroundColor: "gray",
    cursor: "pointer",
  },
  ":active": {
    transform: "scale(0.97)",
  },
});

export const description = style({
  float: "right",
  width: "50%",
});

export const image = style({
  float: "left",
  width: "50%",
});
