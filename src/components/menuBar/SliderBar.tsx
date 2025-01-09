import { useState } from "react"
import * as stylex from "@stylexjs/stylex"
import { motion } from "motion/react"
import { useTheme } from "../../useTheme"
import LightModeIcon from "@mui/icons-material/LightMode"
import CircleIcon from "@mui/icons-material/Circle"

export const SliderBar = () => {
  const { toggleTheme } = useTheme()
  const [toggleLightBar, setToggleLightBar] = useState<boolean>(false)

  const colors = [
    "#FF0000", // Red
    "#FF7F00", // Orange
    "#FFFF00", // Yellow
    "#00FF00", // Green
    "#0000FF", // Blue
    "#4B0082", // Indigo
    "#8B00FF", // Violet
  ]

  return (
    <motion.div
      {...stylex.props(styles.sliderBar)}
      onClick={() => {
        setToggleLightBar(true)
      }}
      onMouseEnter={() => {
        setToggleLightBar(true)
      }}
      onMouseLeave={() => {
        setToggleLightBar(false)
      }}
      variants={{
        collapsed: {
          height: "3rem", // Initial height
          width: "3rem",
        },
        expanded: {
          height: "19rem", // Expanded height
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
          },
        },
      }}
      animate={toggleLightBar ? "expanded" : "collapsed"}
      initial="collapsed"
    >
      {!toggleLightBar && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // backgroundColor: "red",
            width: "100%",
            height: "100%",
          }}
        >
          <LightModeIcon
            style={{
              cursor: "pointer",
            }}
            fontSize="large"
          />
        </div>
      )}

      {toggleLightBar && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.2, // Stagger the child appearance
                duration: 0.2,
              },
            },
          }}
          {...stylex.props(styles.sliderBar)}
        >
          <CircleIcon
            style={{
              width: "1.5rem",
              height: "1.5rem",
              color: "black",
              cursor: "pointer",
            }}
            onClick={() => {
              toggleTheme("black")
            }}
          />
          <CircleIcon
            style={{
              width: "1.5rem",
              height: "1.5rem",
              color: colors[0],
              cursor: "pointer",
            }}
            onClick={() => {
              toggleTheme("red")
            }}
          />
          <CircleIcon
            style={{
              width: "1.5rem",
              height: "1.5rem",
              color: colors[1],
              cursor: "pointer",
            }}
            onClick={() => {
              toggleTheme("orange")
            }}
          />
          <CircleIcon
            style={{
              width: "1.5rem",
              height: "1.5rem",
              color: colors[2],
              cursor: "pointer",
            }}
            onClick={() => {
              toggleTheme("yellow")
            }}
          />
          <CircleIcon
            style={{
              width: "1.5rem",
              height: "1.5rem",
              color: colors[3],
              cursor: "pointer",
            }}
            onClick={() => {
              toggleTheme("green")
            }}
          />
          <CircleIcon
            style={{
              width: "1.5rem",
              height: "1.5rem",
              color: colors[4],
              cursor: "pointer",
            }}
            onClick={() => {
              toggleTheme("blue")
            }}
          />
          <CircleIcon
            style={{
              width: "1.5rem",
              height: "1.5rem",
              color: colors[5],
              cursor: "pointer",
            }}
            onClick={() => {
              toggleTheme("indigo")
            }}
          />
          <CircleIcon
            style={{
              width: "1.5rem",
              height: "1.5rem",
              color: colors[6],
              cursor: "pointer",
            }}
            onClick={() => {
              toggleTheme("violet")
            }}
          />
          <CircleIcon
            style={{
              width: "1.5rem",
              height: "1.5rem",
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => {
              toggleTheme("white")
            }}
          />
        </motion.div>
      )}
    </motion.div>
  )
}

const styles = stylex.create({
  sliderBar: {
    backgroundColor: "var(--secondary-color)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "10rem",
    padding: ".5rem",
    gap: ".5rem",
    justifyItems: "center",
  },
})
