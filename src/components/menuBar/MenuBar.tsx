import * as stylex from "@stylexjs/stylex"
import { MenuButton } from "./MenuButton"
import { useState } from "react"
import { useTheme } from "../../useTheme"
import LightModeIcon from "@mui/icons-material/LightMode"
import CircleIcon from "@mui/icons-material/Circle"
import { useNavigate } from "react-router-dom"
import { motion } from "motion/react"
import { SliderBar } from "./SliderBar"

export const MenuBar = () => {
  const { toggleTheme } = useTheme()
  const [toggleLightBar, setToggleLightBar] = useState<boolean>(false)
  const navigate = useNavigate()
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
    <div {...stylex.props(styles.base)}>
      <div>
        <div {...stylex.props(styles.logoContainer)}>
          <div
            {...stylex.props(styles.logo)}
            onClick={() => {
              navigate("/")
            }}
          >
            M
          </div>
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

      <SliderBar />
      {/* <div {...stylex.props(styles.sliderContainer)}>
        {!toggleLightBar && (
          <motion.div
            initial={false}
            animate={{ scale: 1 }}
            {...stylex.props(styles.roundDiv)}
            onClick={() => {
              if (!toggleLightBar) {
                setToggleLightBar(true)
              }
            }}
            onMouseEnter={() => {
              setToggleLightBar(!toggleLightBar)
            }}
          >
            <LightModeIcon
              {...stylex.props(styles.lightModeIcon)}
              fontSize="large"
            />
          </motion.div>
        )}
        <div>
          {toggleLightBar && (
            <motion.div
              initial={{ scaleY: 0, scaleX: 1 }}
              animate={{
                scale: 1,
                scaleY: 1,
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
              {...stylex.props(styles.sliderBar)}
              onMouseLeave={() => {
                setToggleLightBar(!toggleLightBar)
              }}
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
        </div>
      </div> */}
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
  },

  lightModeIcon: {
    cursor: "pointer",
  },
  roundDiv: {
    borderRadius: "50%",
    width: "3rem",
    height: "3rem",
    backgroundColor: "var(--secondary-color)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  sliderBar: {
    backgroundColor: "var(--primary-color)",
    width: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "10rem",
    padding: ".5rem",
    paddingTop: ".75rem",
    paddingBottom: ".75rem",
    gap: ".5rem",
  },
  sliderContainer: {
    width: "3rem",
  },
  logo: {
    width: "4rem",
    height: "4rem",
    backgroundColor: "var(--secondary-color)",
    borderRadius: "50%",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    fontWeight: "600",
    fontSize: "1.2rem",
    cursor: "pointer",
  },
  logoContainer: {
    height: "15rem",
    // backgroundColor: "var(--secondary-color)",
  },
})
