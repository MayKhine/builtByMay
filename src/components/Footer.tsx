import * as stylex from "@stylexjs/stylex"
import MailOutlineIcon from "@mui/icons-material/MailOutline"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
export const Footer = () => {
  return (
    <footer {...stylex.props(styles.base)}>
      <div {...stylex.props(styles.textSec)}>
        <div>Exploring new opportunities. </div>
        <a
          {...stylex.props(styles.hireMe)}
          href="mailto:maykhine.mmk@gmail.com"
          target="_blank"
        >
          Hire Me
        </a>
      </div>
      <div {...stylex.props(styles.iconSec)}>
        <a
          {...stylex.props(styles.hireMe)}
          href="mailto:maykhine.mmk@gmail.com"
          target="_blank"
        >
          <MailOutlineIcon {...stylex.props(styles.icon)} />
        </a>
        <a
          {...stylex.props(styles.hireMe)}
          href="mailto:maykhine.mmk@gmail.com"
          target="_blank"
        >
          <LinkedInIcon {...stylex.props(styles.icon)} />
        </a>
        <a
          {...stylex.props(styles.hireMe)}
          href="mailto:maykhine.mmk@gmail.com"
          target="_blank"
        >
          <GitHubIcon {...stylex.props(styles.icon)} />
        </a>
      </div>
    </footer>
  )
}

const styles = stylex.create({
  base: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "2rem",
    marginRight: "2rem",
    // backgroundColor: "var(--secondary-color)",
    color: "var(--primary-color)",
    justifyContent: "flex-end",
  },
  textSec: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  hireMe: {
    marginLeft: ".3rem",
    cursor: "pointer",
    fontStyle: "italic",
    color: {
      default: "var(--primary-color)",
      ":hover": "var(--secondary-color)",
    },

    textDecoration: "none",
  },
  iconSec: {
    display: "flex",
    justifyContent: "flex-end",
    gap: ".5rem",
    cursor: "pointer",
    margin: "0",
    // backgroundColor: "pink",
    height: "1.5rem",
  },
  icon: {
    color: {
      default: "var(--primary-color)",
      ":hover": "var(--secondary-color)",
    },
  },
  sliderPopUp: {
    bottom: "0",
    left: "0",
    position: "absolute",
    padding: "2rem",
  },
})
