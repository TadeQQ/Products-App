import { style } from "@vanilla-extract/css";

export const containerR = style({
  "@media": {
    "only screen and (min-width: 1370px)": {
      margin: "auto",
      width: "70%",
      marginTop: "20px",
    },
    "only screen and (max-width: 1369px)": {
      margin: "auto",
      width: "70%",
      marginTop: "20px",
    },
  },
});

export const item = style({
  "@media": {
    "only screen and (min-width: 1370px)": {
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
    },
    "only screen and (min-width: 906px) and (max-width: 1369px)": {
      border: "solid 1px",
      borderColor: "white",
      marginBottom: "20px",
      padding: "10px 15px",
      display: "flex",
      justifyContent: "space-between",
      ":hover": {
        backgroundColor: "gray",
        cursor: "pointer",
      },
      ":active": {
        transform: "scale(0.97)",
      },
    },
    "only screen and (min-width: 400px) and (max-width: 905px)": {
      border: "solid 1px",
      borderColor: "white",
      marginBottom: "20px",
      padding: "10px 15px",
      justifyContent: "column",
      ":hover": {
        backgroundColor: "gray",
        cursor: "pointer",
      },
      ":active": {
        transform: "scale(0.97)",
      },
    },
  },
});

export const description = style({
  "@media": {
    "only screen and (min-width: 1370px)": {
      float: "right",
      width: "50%",
    },
  },
});

export const image = style({
  "@media": {
    "only screen and (min-width: 1370px)": {
      float: "left",
      width: "50%",
    },
  },
});
