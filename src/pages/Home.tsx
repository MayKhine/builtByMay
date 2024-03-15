import * as stylex from "@stylexjs/stylex"
import { tokens, colors } from "../tokens.stylex"
import { MenuBar } from "../components/MenuBar"
export const Home = () => {
  return (
    <div>
      <MenuBar />
      <div {...stylex.props(styles.base)}>Hello</div>
    </div>
  )
}

const styles = stylex.create({
  base: {
    // maxHeight: "100vh",
    height: "100vh",
    // backgroundColor: "blue",
    backgroundColor: tokens.darkBlue,
    // backgroundColor: colors.white,
  },

  menubar: {
    backgroundColor: "pink",
    height: "30px",
  },
})
