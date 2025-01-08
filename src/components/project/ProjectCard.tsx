import * as styleX from "@stylexjs/stylex"
// import { tokens } from "../../tokens.stylex"
export type ProjectType = {
  title: string
  text: string
  link: string
}

type ProjectCardProps = {
  projectData: ProjectType
}

export const ProjectCard = ({ projectData }: ProjectCardProps) => {
  return (
    <div {...styleX.props(styles.base)}>
      <div>
        <a
          href={projectData.link}
          target="_blank"
          {...styleX.props(styles.title)}
        >
          {projectData.title}
        </a>
      </div>
      <div {...styleX.props(styles.subText)}> {projectData.text}</div>
      <img
        {...styleX.props(styles.img)}
        src="https://cdn-media-1.freecodecamp.org/images/1*Aq7TXpuzXp8lTX0Dhxw_DQ.png"
      ></img>
    </div>
  )
}

const styles = styleX.create({
  base: {
    // minWidth: "517px",
    minWidth: "500px",

    display: "flex",
    flexDirection: "column",
    // backgroundColor: tokens.darkBlue2,
    // color: tokens.offWhite,
    borderRadius: ".5rem",
    alignItems: "center",
    padding: "15px",
  },
  textDiv: {
    padding: "1rem",
  },
  title: {
    fontWeight: "600",
    cursor: "pointer",
    textDecorationLine: "none",
  },
  subText: {
    fontSize: ".8rem",
    fontWeight: "400",
    fontStyle: "italic",
  },
  img: {
    // width: "10%",
    width: "30rem",
  },
})
