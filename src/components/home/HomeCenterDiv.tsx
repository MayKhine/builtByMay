import * as styleX from "@stylexjs/stylex"
import { Link } from "react-router-dom"
// import { tokens } from "../../tokens.stylex"

export const HomeCenterDiv = () => {
  return (
    <div {...styleX.props(styles.base)}>
      <div {...styleX.props(styles.center)}>
        <div {...styleX.props(styles.mainText)}>Hello, my name is May.</div>
        <div {...styleX.props(styles.subText)}>
          I am a full-stack developer based in Boston, MA. I bring designs and
          ideas to life.
        </div>
        <div {...styleX.props(styles.groupText)}>
          <div>I am working on </div>
          <div {...styleX.props(styles.proejctText)}>
            <Link {...styleX.props(styles.linkedText)} to="/projects">
              my personal projects
            </Link>
          </div>
          <div> to sharpen my tech skills.</div>
        </div>
      </div>
    </div>
  )
}

const styles = styleX.create({
  base: {
    // background: tokens.offWhite,
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    paddingBottom: "10%",
  },
  center: {
    minWidth: "517px",
    // width: "50%",
    // width: "50%",
    alignSelf: "center",
    alignItems: "center",
  },
  mainText: {
    fontWeight: "700",
  },
  subText: {
    fontWeight: "500",
    // fontStyle: "italic",
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
