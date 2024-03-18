import * as stylex from "@stylexjs/stylex"
import { tokens } from "../../tokens.stylex"
import { MenuBar } from "../layouts/MenuBar"

export const Home = () => {
  return (
    <div {...stylex.props(styles.base)}>
      <MenuBar />
      <div>HELLO HOME PAGE</div>
    </div>
  )
}

const styles = stylex.create({
  base: {
    // maxHeight: "100vh",
    // marginTop: "30px",
    height: "100vh",
    // backgroundColor: "blue",
    backgroundColor: tokens.offWhite,

    // backgroundColor: colors.white,
  },

  menubar: {
    backgroundColor: "pink",
    height: "30px",
  },
})
