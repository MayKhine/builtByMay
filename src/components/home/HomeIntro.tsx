import * as stylex from "@stylexjs/stylex"
import { projectStyles } from "../../tokens.stylex"
import { Link } from "react-router-dom"

export const HomeIntro = () => {
  return (
    <div {...stylex.props(styles.base)}>
      <div {...stylex.props(styles.center)}>
        <div {...stylex.props(projectStyles.bigFont, styles.about)}>
          <div>Hello, I am May!</div>
          <div>
            I'm a Boston-based developer. I love turning ideas into smooth,
            stylish web experiences. I write clean, efficient code with
            thoughtful design, and I’m always learning something new. With a
            solid foundation in databases and a sharp eye for data, I bring both
            creativity and logic to everything I build.
          </div>
          <div>
            Currently, I am working on
            <Link
              {...stylex.props(styles.proejctText, styles.linkedText)}
              to={"./projects"}
            >
              my personal projects
            </Link>
            to sharpen my technical skills.
          </div>
        </div>
        <div {...stylex.props(styles.skillsSec)}>
          <div {...stylex.props(projectStyles.bigFont)}>
            My current technical skills
          </div>
          <div>Front-End Development</div>
          <div {...stylex.props(projectStyles.slimFont)}>
            React, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, StyleX
          </div>
          <div>Back-End Development</div>
          <div {...stylex.props(projectStyles.slimFont)}>
            Node.js, Express.js, RESTful APIs
          </div>
          <div>Databases</div>
          <div {...stylex.props(projectStyles.slimFont)}>
            PL/SQL, SQL, Oracle Database
          </div>
          <div>Other Technologies</div>
          <div {...stylex.props(projectStyles.slimFont)}>
            Git, GitHub, Docker, Nginx, Figma, Lottie, Tableau, PowerBI, Jasper
            Reprots
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = stylex.create({
  base: {
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    justifyItems: "center",
    alignItems: "center",
  },
  center: {
    maxWidth: "49rem",
    minWidth: "15rem",
    gap: "1rem",
  },
  about: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
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
    fontStyle: "italic",
    cursor: "pointer",
  },
  skillsSec: {
    marginTop: "3rem",
    textAlign: "end",
  },
})
