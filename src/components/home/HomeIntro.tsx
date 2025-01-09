import * as stylex from "@stylexjs/stylex"

export const HomeIntro = () => {
  return (
    <div {...stylex.props(styles.base)}>
      <div {...stylex.props(styles.center)}>
        <div {...stylex.props(styles.introSec)}>
          <div>Hello, I am May!</div>
          <div>
            I am a front-end developer with a passion for UI/UX designs. Based
            in Boston, MA. I bring designs and ideas to life through clean and
            efficcient code.
          </div>
          <div>
            Currently, I am working on
            <a
              href={"./projects"}
              {...stylex.props(styles.proejctText, styles.linkedText)}
            >
              my personal projects
            </a>
            to sharpen my technical skills.
          </div>
        </div>
        <div {...stylex.props(styles.skillsSec)}>
          <div {...stylex.props(styles.introSec)}>
            My current technical skills
          </div>
          <div>Front-End Development</div>
          <div {...stylex.props(styles.skills)}>
            React, TypeScript, JavaScript, HTML, CSS, Stylex
          </div>
          <div>Back-End Development</div>
          <div {...stylex.props(styles.skills)}>
            Node.js, Express.js, RESTful APIs
          </div>
          <div>Databases</div>
          <div {...stylex.props(styles.skills)}>
            PL/SQL, SQL, Oracle Database
          </div>
          <div>Other Technologies</div>
          <div {...stylex.props(styles.skills)}>Figma, Tableau</div>
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
    // paddingTop: "10rem",
    // backgroundColor: "gray",
    justifyContent: "center",
    justifyItems: "center",
    alignItems: "center",
  },
  center: {
    maxWidth: "50rem",
    minWidth: "20rem",
    // backgroundColor: "lightgray",
  },
  introSec: {
    fontSize: "1.2rem",
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
  skillsSec: {
    marginTop: "3rem",
    textAlign: "end",
  },
  skills: {
    fontWeight: "200",
  },
})
