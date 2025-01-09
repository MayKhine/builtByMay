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
    // backgroundColor: "pink",
  },
  sliderPopUp: {
    bottom: "0",
    left: "0",
    position: "fixed",
    padding: "2rem",
  },
})
