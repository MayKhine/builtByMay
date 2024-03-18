import * as styleX from "@stylexjs/stylex"
import { ButtonDiv } from "./ButtonDiv"

export const MenuBar = () => {
  return (
    <div {...styleX.props(styles.base)}>
      <ButtonDiv
        text="HOME"
        onClickFn={() => {
          console.log("Navigate to Home ")
          // return <Navigate to="/" replace={true} />
        }}
      />
      <ButtonDiv
        text="PROJECTS"
        onClickFn={() => {
          console.log("Navigate to Projects ")
          // return <Navigate to="/projects" replace={true} />
        }}
      />
      <ButtonDiv
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
    backgroundColor: "pink",
    display: "flex",
    gap: ".5rem",
    justifyContent: "flex-end",
    paddingRight: "1rem",
  },
})
