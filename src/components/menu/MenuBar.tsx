import * as stylex from "@stylexjs/stylex"
import { MenuButton } from "./MenuButton"
import { Logo } from "./Logo"
// import { useNavigate } from "react-router-dom"
// import { motion } from "motion/react"
// import { projectStyles } from "../../tokens.stylex"

export const MenuBar = () => {
  // const navigate = useNavigate()

  return (
    <div {...stylex.props(styles.base)}>
      <div {...stylex.props(styles.logoContainer)}>
        <Logo />
      </div>
      <div>
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
    </div>
  )
}

const styles = stylex.create({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: ".5rem",
    padding: "2rem",
    paddingRight: "5rem",
    // justifyContent: "space-between",
    // backgroundColor: "white",
  },
  logoContainer: {
    height: "7rem",
  },
})
