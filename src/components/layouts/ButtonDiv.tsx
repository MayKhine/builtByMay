import * as styleX from "@stylexjs/stylex"
import { Link } from "react-router-dom"

type ButtonDivProps = {
  text: string
  onClickFn: () => void
}

export const ButtonDiv = ({ text, onClickFn }: ButtonDivProps) => {
  let linkString = "/"
  if (text !== "HOME") {
    linkString += `${text.toLocaleLowerCase()}`
  }
  return (
    <div {...styleX.props(styles.base)} onClick={onClickFn}>
      <Link {...styleX.props(styles.text)} to={linkString}>
        {text}
      </Link>
    </div>
  )
}

const styles = styleX.create({
  base: {
    background: "white",
    cursor: "pointer",
    width: "max-content",
    padding: ".2rem",
    paddingLeft: ".5rem",
    paddingRight: ".5rem",
  },
  text: {
    textDecoration: "none",
    color: "black",
  },
})
