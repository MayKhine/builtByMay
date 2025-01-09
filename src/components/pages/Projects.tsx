import * as stylex from "@stylexjs/stylex"
import { ProjectCard, ProjectType } from "../project/ProjectCard"
import { projectStyles } from "../../tokens.stylex"
import { MenuBar } from "../menuBar/MenuBar"
import { SliderBar } from "../menuBar/SliderBar"
import { Footer } from "../Footer"

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
    <div {...stylex.props(projectStyles.pageStyleForFooter)}>
      <div {...stylex.props(projectStyles.sliderPopUp)}>
        <SliderBar />
      </div>

      <div {...stylex.props(projectStyles.pageStyleForMenu)}>
        <MenuBar />
        <div {...stylex.props(projectStyles.base)}>
          <ProjectCard projectData={project1} />
          <ProjectCard projectData={project1} />
          <ProjectCard projectData={project1} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

const styles = stylex.create({
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
