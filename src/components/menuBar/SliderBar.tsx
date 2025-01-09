import { useState } from "react"
import * as stylex from "@stylexjs/stylex"
import { motion } from "motion/react"

export const SliderBar = () => {
  const [toggleSlider, setToggleSlider] = useState(false)
  return (
    <motion.div
      onClick={() => {
        setToggleSlider(true)
      }}
      onMouseEnter={() => {
        setToggleSlider(true)
      }}
      onMouseLeave={() => {
        setToggleSlider(false)
      }}
      {...stylex.props(styles.base(toggleSlider))}
      animate={{
        scale: 1,
        scaleY: 1,
        transition: { duration: 1, ease: "easeInOut" },
      }}
      whileHover={{ height: "10rem" }}
      onHoverStart={() => {
        console.log("hover started!")
        setToggleSlider(true)
      }}
    >
      {!toggleSlider && <div> Show Light </div>}
      {toggleSlider && <div> Show Color </div>}
    </motion.div>
  )
}

const styles = stylex.create({
  base: (toggleLightBar) => ({
    height: {
      default: toggleLightBar ? "10rem" : "3rem",
    },
    backgroundColor: "pink",
  }),
})
