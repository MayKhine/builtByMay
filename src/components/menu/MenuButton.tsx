import * as styleX from "@stylexjs/stylex"
import { Link } from "react-router-dom"
import { projectStyles } from "../../tokens.stylex"

type MenuButtonType = {
  text: string
  onClickFn: () => void
}

export const MenuButton = ({ text, onClickFn }: MenuButtonType) => {
  let linkString = "/"
  if (text !== "HOME") {
    linkString += `${text.toLocaleLowerCase()}`
  }
  return (
    <div {...styleX.props(styles.base)} onClick={onClickFn}>
      <Link
        {...styleX.props(styles.text, projectStyles.slimFont)}
        to={linkString}
      >
        {text}
      </Link>
    </div>
  )
}

const styles = styleX.create({
  base: {
    cursor: "pointer",
  },
  text: {
    textDecoration: "none",
    color: {
      default: "var(--text-color)",
      ":hover": "var(--primary-color)",
    },
  },
})
