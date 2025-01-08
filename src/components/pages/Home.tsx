import * as stylex from "@stylexjs/stylex"
// import { tokens } from "../../tokens.stylex"
import { MenuBar } from "../menuBar/MenuBar"
// import { HomeCenterDiv } from "../home/HomeCenterDiv"
import { useTheme } from "../../useTheme"
// import { Button } from "../../assets/Button"

import LightModeIcon from "@mui/icons-material/LightMode"
import CircleIcon from "@mui/icons-material/Circle"
import { useState } from "react"
import { BorderLeftRounded } from "@mui/icons-material"

export const Home = () => {
  const { theme, toggleTheme } = useTheme()
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
    <div {...stylex.props(styles.base)}>
      <MenuBar />

      <div {...stylex.props(styles.sliderContainer)}>
        {!toggleLightBar && (
          <div
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
          </div>
        )}
        <div>
          {toggleLightBar && (
            <div
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
            </div>
          )}
        </div>
      </div>

      {/* <HomeCenterDiv /> */}
    </div>
  )
}

const styles = stylex.create({
  base: {
    height: "100%",
    minHeight: "100vh",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "var(--background-color)",
    color: "var(--text-color)",
  },
  lightModeIcon: {
    // color: "red",
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
    width: "2rem", // Width of your slider
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
    // backgroundColor: "green",
    width: "3rem",
  },
})
