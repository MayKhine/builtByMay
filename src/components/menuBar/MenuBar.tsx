import * as styleX from "@stylexjs/stylex"
import { MenuButton } from "./MenuButton"
export const MenuBar = () => {
  return (
    <div {...styleX.props(styles.base)}>
      <MenuButton
        text="HOME"
        onClickFn={() => {
          console.log("Navigate to Home ")
          // return <Navigate to="/" replace={true} />
        }}
      />
      <MenuButton
        text="PROJECTS"
        onClickFn={() => {
          console.log("Navigate to Projects ")
          // return <Navigate to="/projects" replace={true} />
        }}
      />
      <MenuButton
        text="ABOUT"
        onClickFn={() => {
          console.log("Navigate to About ")
        }}
      />
    </div>
  )
}

const styles = styleX.create({
  base: {
    display: "flex",
    gap: ".5rem",
    justifyContent: "flex-end",
    paddingRight: "1rem",
    // backgroundColor: "red",
    height: "3rem",
    alignItems: "center",
  },
})
