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
  slimFont: {
    fontWeight: 200,
  },
})
