import * as stylex from "@stylexjs/stylex"
import { MenuButton } from "./MenuButton"
import { motion } from "motion/react"

type DropDownMenuType = {
  closeDropDownMenu: () => void
}
export const DropDownMenu = ({ closeDropDownMenu }: DropDownMenuType) => {
  return (
    <motion.div
      initial={{ height: "1rem", opacity: 0 }}
      animate={{
        height: "100%",
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 10,
          duration: 0.2,
        },
      }}
      {...stylex.props(styles.base)}
    >
      <div {...stylex.props(styles.background)}> </div>
      <div {...stylex.props(styles.menuButtons)}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delay: 0.2, // Stagger the child appearance
                duration: 0.2,
              },
            },
          }}
        >
          <MenuButton
            text="HOME"
            onClickFn={() => {
              console.log("Go to home")
              closeDropDownMenu()
            }}
          />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delay: 0.4, // Stagger the child appearance
                duration: 0.2,
              },
            },
          }}
        >
          <MenuButton
            text="PROJECTS"
            onClickFn={() => {
              console.log("Go to projects")
              closeDropDownMenu()
            }}
          />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delay: 0.6, // Stagger the child appearance
                duration: 0.2,
              },
            },
          }}
        >
          <MenuButton
            text="ABOUT"
            onClickFn={() => {
              console.log("Go to About me")
              closeDropDownMenu()
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

const styles = stylex.create({
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  background: {
    backgroundColor: "var(--secondary-color)",
    opacity: ".2",
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: "-1",
  },
  menuButtons: {
    padding: "1rem",
    paddingRight: "2rem",
    alignItems: "flex-end",
    display: "flex",
    flexDirection: "column",
  },
})
