import { style } from "@vanilla-extract/css";

export const filterName = style({
  textAlign: "center",
  padding: "10px",
  border: "solid 1px",
  borderColor: "white",
});
export const filterContainer = style({
  "@media": {
    "only screen and (min-width: 900px)": {
      border: "solid 1px",
      borderColor: "white",
      display: "flex",
      justifyContent: "space-around",
      padding: "15px",
    },
    "only screen and (min-width: 520px) and (max-width: 899px)": {
      border: "solid 1px",
      borderColor: "white",
      display: "flex",
      flexFlow: "column wrap",
      justifyContent: "center",
      padding: "15px",
    },
  },
});

export const select = style({
  border: "solid 1px",
  borderColor: "white",
  padding: "10px",
  backgroundColor: "black",
  alignSelf: "center",
  ":hover": {
    backgroundColor: "gray",
    cursor: "pointer",
  },
  ":active": {
    transform: "scale(0.97)",
  },
});
export const main = style({
  margin: "auto",
  width: "50%",
  padding: "20px 15px",
  marginTop: "20px",
});

export const container = style({
  border: "solid 1px",
  borderColor: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginTop: "15px",
});

export const button = style({
  border: "solid 1px",
  borderColor: "white",
  padding: "10px",
  backgroundColor: "black",
  alignSelf: "center",
  ":hover": {
    backgroundColor: "gray",
    cursor: "pointer",
  },
  ":active": {
    transform: "scale(0.94)",
  },
});
