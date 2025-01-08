import { MenuBar } from "../menuBar/MenuBar"
import * as stylex from "@stylexjs/stylex"

export const About = () => {
  return (
    <div {...stylex.props(styles.page)}>
      <MenuBar />
      <div {...stylex.props(styles.base)}>about</div>
    </div>
  )
}

const styles = stylex.create({
  page: {
    height: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "var(--background-color)",
    color: "var(--text-color)",
  },

  base: { display: "flex" },
})
