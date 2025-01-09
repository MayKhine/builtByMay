import * as styleX from "@stylexjs/stylex"
import { Link } from "react-router-dom"
import { tokens } from "../../tokens.stylex"

export const HomeIntro = () => {
  return (
    <div {...styleX.props(styles.base)}>
      <div {...styleX.props(styles.center)}>
        <div>Hello!</div>
        <div>
          I am a front-end developer with a passion for UI/UX designs. Based in
          Boston, MA. I bring designs and ideas to life through clean and
          efficcient code.
        </div>
        <div {...styleX.props(styles.groupText)}>
          <div>Currently, I am working on </div>
          <div {...styleX.props(styles.proejctText)}>
            <Link {...styleX.props(styles.linkedText)} to="/projects">
              my personal projects
            </Link>
          </div>
          <div> to sharpen my technical skills.</div>
        </div>
      </div>
    </div>
  )
}

const styles = styleX.create({
  base: {
    display: "flex",
    width: "100%",
    fontSize: "1.2rem",
    paddingTop: "10rem",
    // backgroundColor: "gray",
    justifyContent: "center",
  },
  center: {
    maxWidth: "50rem",
    minWidth: "20rem",
    // backgroundColor: "lightgray",
  },
  groupText: {
    display: "flex",
  },
  proejctText: {
    marginLeft: ".3rem",
    marginRight: ".3rem",
  },
  linkedText: {
    color: {
      default: "var(--primary-color)",
      ":hover": "var(--secondary-color)",
    },
    textDecoration: "none",
    // fontWeight: "200",
    fontStyle: "italic",
    cursor: "pointer",
  },
})
