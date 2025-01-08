import * as stylex from "@stylexjs/stylex"
import { MenuBar } from "../menuBar/MenuBar"

export const Home = () => {
  return (
    <div {...stylex.props(styles.page)}>
      <MenuBar />

      <div {...stylex.props(styles.base)}>
        {/* <HomeCenterDiv /> */}
        hi this is home page
      </div>
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
