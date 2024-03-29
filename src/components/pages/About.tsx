import { tokens } from "../../tokens.stylex"
import { MenuBar } from "../layouts/MenuBar"
import * as styleX from "@stylexjs/stylex"
export const About = () => {
  return (
    <div>
      <MenuBar />
      <div {...styleX.props(styles.base)}>
        <div {...styleX.props(styles.center)}> Hello</div>
      </div>
    </div>
  )
}

const styles = styleX.create({
  base: {
    background: tokens.offWhite,
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    paddingBottom: "10%",
  },
  center: {
    backgroundColor: tokens.blue,
    minWidth: "517px",
    alignSelf: "center",
    alignItems: "center",
  },
  mainText: {
    fontWeight: "700",
  },
  subText: {
    fontWeight: "500",
  },
  groupText: {
    display: "flex",
  },
  proejctText: {
    marginLeft: ".3rem",
    marginRight: ".3rem",
    fontWeight: "500",
    fontStyle: "italic",
    cursor: "pointer",
  },
  linkedText: {
    color: "black",
    textDecoration: "none",
  },
})
