import { motion } from "motion/react"
import * as stylex from "@stylexjs/stylex"
import { useState } from "react"
// import { tokens } from "../../tokens.stylex"
export type ProjectType = {
  title: string
  description: string
  technologies: Array<string>
  github?: string
  liveLink?: string
}

type ProjectCardProps = {
  projectData: ProjectType
}

export const ProjectCard = ({ projectData }: ProjectCardProps) => {
  const [toggleOverlay, setToggleOverlay] = useState(false)
  return (
    <div
      {...stylex.props(styles.base)}
      onMouseEnter={() => {
        setToggleOverlay(true)
      }}
      onMouseLeave={() => {
        setToggleOverlay(false)
      }}
    >
      <img
        {...stylex.props(styles.img)}
        src="https://fps.cdnpk.net/images/ai/image-generator/advantages/image-generator-freepik-7.webp?w=3840&h=1920&q=75"
      ></img>
      {toggleOverlay && (
        <div {...stylex.props(styles.overLay)}>
          <div {...stylex.props(styles.grayScreen)}> </div>
          <motion.div
            transition={{
              // type: "spring",
              // stiffness: 100,
              // damping: 1,
              ease: "easeIn",
              duration: 0.5,
            }}
            initial={{
              //  scaleY: 0
              y: "18rem",
            }}
            animate={{
              // scaleY: 1
              y: "10rem",
            }}
            {...stylex.props(styles.title)}
          >
            {projectData.title}
          </motion.div>
        </div>
      )}
    </div>
  )
}

const styles = stylex.create({
  base: {
    width: "20rem",
    height: "20rem",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "pink",
    alignItems: "center",
    cursor: "pointer",
    position: "relative",
  },
  overLay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "20rem",
    height: "20rem",
  },
  grayScreen: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "20rem",
    height: "20rem",
    backgroundColor: "var(--background-color)",
    opacity: 0.6,
  },

  title: {
    alignSelf: "center",
    textAlign: "center",
    fontWeight: "600",
  },

  img: {
    width: "20rem",
    heigth: "20rem",
    objectFit: "cover", // cover : clip to fit, "contain" : keeps the ratio,
    height: "20rem",
  },
})
