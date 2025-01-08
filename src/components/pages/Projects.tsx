import * as styleX from "@stylexjs/stylex"
import { MenuBar } from "../menuBar/MenuBar"
import { ProjectCard, ProjectType } from "../project/ProjectCard"
// import { tokens } from "../../tokens.stylex"

export const Projects = () => {
  const project1: ProjectType = {
    title: "Old Portfolio Project",
    text: "Github pages",
    link: "https://maykhine.github.io/portfolio/",
  }

  const project2: ProjectType = {
    title: "Old Todo Project",
    text: "Another Github pages",
    link: "https://maykhine.github.io/todo-app/",
  }
  return (
    <div {...styleX.props(styles.base)}>
      <MenuBar />
      {/* <div {...styleX.props(styles.projectsDiv)}>
        <ProjectCard projectData={project1} />
        <ProjectCard projectData={project2} />
      </div> */}
    </div>
  )
}

const styles = styleX.create({
  base: {
    height: "100vh",
    // backgroundColor: tokens.offWhite,
    display: "flex",
    flexDirection: "column",
  },

  projectsDiv: {
    marginTop: "5%",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    // background: tokens.offWhite,
    paddingBottom: "10%",
    alignItems: "center",
  },
})
