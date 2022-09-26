import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  justifyContent: "space-around",
  textAlign: "center",
  marginTop: "20px",
  margin: "auto",
  width: "50%",
  border: "solid 1px",
  borderColor: "white",
  padding: "10px",
  marginBottom: "10px",
});

export const filterName = style({
  textAlign: "center",
  margin: "auto",
  width: "30%",
  border: "solid 1px",
  borderColor: "white",
  padding: "5px",
});
