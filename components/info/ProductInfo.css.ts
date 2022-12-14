import { style } from "@vanilla-extract/css";

export const container = style({
  "@media": {
    "only screen and (min-width: 885px)": {
      backgroundColor: "white",
      margin: "auto",
      width: "90%",
      border: "solid 1px",
      borderColor: "white",
      padding: "20px 10px",
      display: "flex",
      justifyContent: "space-around",
      color: "black",
    },
    "only screen and (max-width: 885px)": {
      backgroundColor: "white",
      margin: "auto",
      width: "90%",
      border: "solid 1px",
      borderColor: "white",
      padding: "20px 10px",
      display: "flex",
      flexDirection: "column",
      color: "black",
    },
  },
});

export const info = style({
  width: "50%",
});

export const swiper = style({
  width: "50%",
  padding: "0px",
  display: "flex",
  marginRight: "10px",
  justifyContent: "left",
  transition: "transform .3s",
  borderRadius: "5px",
});
export const swiperSlide = style({
  ":hover": {
    cursor: "grab",
  },
  ":active": {
    cursor: "grabbing",
  },
});

export const krzywy = style({
  fontStyle: "italic",
});

export const price = style({
  display: "flex",
  justifyContent: "flex-end",
  marginRight: "20px",
  color: "blueviolet",
  fontSize: "30px",
});

export const rightCorner = style({
  display: "flex",
  justifyContent: "flex-end",
  color: "red",
  fontStyle: "italic",
});

export const black = style({
  color: "black",
  fontWeight: "bold",
});

export const noneStyle = style({
  textDecoration: "none",
  color: "inherit",
});
