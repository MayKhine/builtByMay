import * as stylex from "@stylexjs/stylex"

export const projectStyles = stylex.create({
  pageStyleForFooter: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  pageStyleForMenu: {
    flexGrow: "1",
    display: "flex",
    flexDirection: "row",
    // height: "100vh",
  },
  base: {
    width: "100%",
    margin: "2rem",
    "@media (max-width: 768px)": {
      marginTop: "9rem",
    },
  },
  sliderPopUp: {
    bottom: "0",
    left: "0",
    position: "fixed",
    padding: "2rem",
    zIndex: "20",
    opacity: ".8",
  },
  thickFont: {
    fontWeight: "600",
  },
  bigFont: {
    fontSize: "1.2rem",
  },
  smallFont: {
    fontSize: ".8rem",
  },
  projectTitle: { fontSize: "2rem" },
  slimFont: {
    fontWeight: 200,
  },
  italicFont: { fontStyle: "italic" },
  link: {
    color: {
      default: "var(--primary-color)",
      ":hover": "var(--secondary-color)",
    },
    cursor: "pointer",
    textDecoration: "none",
  },

  mobile: {
    display: "none",
    "@media (max-width: 768px)": {
      display: "block",
    },
    position: "fixed",
    width: "100%",
    zIndex: "1",
  },
  ipad: {
    display: "none",
    "@media (min-width: 767px)": {
      display: "block",
    },
  },
  shadowBackground: {
    backgroundColor: "pink",
    // backgroundColor: "var(--secondary-color)",
    opacity: ".2",
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: "-1",
  },
})
