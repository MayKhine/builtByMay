import * as stylex from "@stylexjs/stylex"
import { tokens } from "../../tokens.stylex"
import { MenuBar } from "../layouts/MenuBar"
import { HomeCenterDiv } from "../home/HomeCenterDiv"
export const Home = () => {
  return (
    <div {...stylex.props(styles.base)}>
      <MenuBar />
      <HomeCenterDiv />
    </div>
  )
}

const styles = stylex.create({
  base: {
    height: "100vh",
    backgroundColor: tokens.offWhite,
    display: "flex",
    flexDirection: "column",
  },

  menubar: {
    backgroundColor: "pink",
    height: "30px",
  },
})
