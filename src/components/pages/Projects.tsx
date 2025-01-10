import * as stylex from "@stylexjs/stylex"
import { ProjectCard, ProjectType } from "../project/ProjectCard"
import { projectStyles } from "../../tokens.stylex"
import { MenuBar } from "../menuBar/MenuBar"
import { SliderBar } from "../menuBar/SliderBar"
import { Footer } from "../Footer"

export const Projects = () => {
  const project1: ProjectType = {
    title: "Project Title",
    description: "Github pages",
    technologies: ["React", "TypeScript", "CSS", "StyleX"],
    github: "https://maykhine.github.io/portfolio/",
  }

  const project2: ProjectType = {
    title:
      "A Very VERY LONG Project TitleProject TitleProject TitleProject Title",
    description: "Another Github pages",
    technologies: ["React", "TypeScript", "CSS", "StyleX"],
    github: "https://maykhine.github.io/todo-app/",
  }
  return (
    <div {...stylex.props(projectStyles.pageStyleForFooter)}>
      <div {...stylex.props(projectStyles.sliderPopUp)}>
        <SliderBar />
      </div>

      <div {...stylex.props(projectStyles.pageStyleForMenu)}>
        <MenuBar />
        <div {...stylex.props(projectStyles.base)}>
          <div {...stylex.props(styles.mainContainer)}>
            <div {...stylex.props(styles.header, projectStyles.bigFont)}>
              {" "}
              Projects
            </div>

            <div {...stylex.props(styles.projectsContainer)}>
              <ProjectCard projectData={project1} />
              <ProjectCard projectData={project2} />
              <ProjectCard projectData={project1} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

const styles = stylex.create({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    justifyItems: "center",
    alignItems: "center",
    // backgroundColor: "gray",
  },
  header: {
    // marginTop: "10rem",
    width: "100%",
    // backgroundColor: "pink",
    textAlign: "end",
    paddingBottom: "3rem",
  },

  projectsContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    gap: "3rem",
    flexWrap: "wrap",
    justifyContent: "flex-end",
  },
})
