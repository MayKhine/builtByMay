import * as stylex from "@stylexjs/stylex"
import { MenuBar } from "../menuBar/MenuBar"
import { HomeIntro } from "../home/HomeIntro"

export const Home = () => {
  return (
    <div {...stylex.props(styles.page)}>
      <MenuBar />
      <div {...stylex.props(styles.base)}>
        <HomeIntro />

        <div> Another text block</div>
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

  base: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    padding: "2rem",
    // backgroundColor: "pink",
  },
})
