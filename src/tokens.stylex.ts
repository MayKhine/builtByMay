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
  },
  base: {
    width: "100%",
    margin: "2rem",
  },
  sliderPopUp: {
    bottom: "0",
    left: "0",
    position: "fixed",
    padding: "2rem",
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
  slimFont: {
    fontWeight: 200,
  },
  link: {
    color: {
      default: "var(--primary-color)",
      ":hover": "var(--secondary-color)",
    },
    cursor: "pointer",
    textDecoration: "none",
  },
})
