import * as stylex from "@stylexjs/stylex"
import { MenuButton } from "./MenuButton"
import { useNavigate } from "react-router-dom"
import { motion } from "motion/react"

export const MenuBar = () => {
  const navigate = useNavigate()

  return (
    <div {...stylex.props(styles.base)}>
      <div>
        <div {...stylex.props(styles.logoContainer)}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
            {...stylex.props(styles.logo)}
            onClick={() => {
              navigate("/")
            }}
          >
            M
          </motion.div>
        </div>
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
    justifyContent: "space-between",
    // backgroundColor: "white",
  },

  logo: {
    width: "4rem",
    height: "4rem",
    backgroundColor: {
      default: "var(--secondary-color)",
      ":hover": "var(--primary-color)",
    },
    borderRadius: "50%",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    fontWeight: "600",
    fontSize: "1.2rem",
    cursor: "pointer",
  },
  logoContainer: {
    height: "10rem",
  },
})
