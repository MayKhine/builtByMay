import { motion } from "motion/react"
import * as stylex from "@stylexjs/stylex"
import { useState } from "react"
import { ProjectType } from "../pages/Project"
import { useNavigate } from "react-router-dom"
// import { tokens } from "../../tokens.stylex"

type ProjectCardProps = {
  projectData: ProjectType
}

export const ProjectCard = ({ projectData }: ProjectCardProps) => {
  const [toggleOverlay, setToggleOverlay] = useState(false)
  const navigate = useNavigate()
  const projectImg = projectData.images[0]?.imageLink
    ? projectData.images[0]?.imageLink
    : "https://www.svgrepo.com/show/389437/sprout.svg"
  return (
    <div
      {...stylex.props(styles.base)}
      onMouseEnter={() => {
        setToggleOverlay(true)
      }}
      onMouseLeave={() => {
        setToggleOverlay(false)
      }}
      onClick={() => {
        setToggleOverlay(true)
      }}
    >
      {projectImg && <img {...stylex.props(styles.img)} src={projectImg}></img>}
      {toggleOverlay && (
        <div
          {...stylex.props(styles.overLay)}
          onClick={() => {
            navigate(`/projects/${projectData.titleForLink}`)
          }}
        >
          <div {...stylex.props(styles.grayScreen)}> </div>
          <motion.div
            transition={{
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
    backgroundColor: "var(--secondary-color)",
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
