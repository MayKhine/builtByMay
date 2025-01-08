import * as stylex from "@stylexjs/stylex"

type ButtonType = {
  text: string
  onClickFn: () => void
}
export const Button = ({ text, onClickFn }: ButtonType) => {
  return (
    <button {...stylex.props(styles.base)} onClick={onClickFn}>
      {text}
    </button>
  )
}

const styles = stylex.create({
  base: {
    color: "var(--text-color)",
    backgroundColor: "var(--secondary-color)",
    padding: "1rem",
    borderRadius: ".5rem",
  },
})
