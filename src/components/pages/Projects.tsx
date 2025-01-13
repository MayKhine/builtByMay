import * as stylex from "@stylexjs/stylex"
import { ProjectCard } from "../project/ProjectCard"
import { projectStyles } from "../../tokens.stylex"
import { MenuBar } from "../menu/MenuBar"
import { SliderBar } from "../menu/SliderBar"
import { Footer } from "../Footer"
import { HamburgerMenu } from "../menu/HamburgerMenu"
import { ProjectType } from "./Project"
import projects from "../../data/projects.json"

export const Projects = () => {
  // const project1: ProjectType = {
  //   id: "1",
  //   title: "Project Title",
  //   titleForLink: "project-title",
  //   description: "Github pages",
  //   technologies: ["React", "TypeScript", "CSS", "StyleX"],
  //   github: "https://maykhine.github.io/portfolio/",
  // }

  // const project2: ProjectType = {
  //   id: "2",
  //   title:
  //     "A Very VERY LONG Project TitleProject TitleProject TitleProject Title",
  //   titleForLink: "a-very-very-long-title",
  //   description: "Another Github pages",
  //   technologies: ["React", "TypeScript", "CSS", "StyleX"],
  //   github: "https://maykhine.github.io/todo-app/",
  // }
  return (
    <div {...stylex.props(projectStyles.pageStyleForFooter)}>
      <div {...stylex.props(projectStyles.mobile)}>
        <HamburgerMenu />
      </div>
      <div {...stylex.props(projectStyles.sliderPopUp)}>
        <SliderBar />
      </div>

      <div {...stylex.props(projectStyles.pageStyleForMenu)}>
        <div {...stylex.props(projectStyles.ipad)}>
          <MenuBar />
        </div>
        <div {...stylex.props(projectStyles.base)}>
          <div {...stylex.props(styles.mainContainer)}>
            <div {...stylex.props(styles.header, projectStyles.bigFont)}>
              Projects
            </div>

            <div {...stylex.props(styles.projectsContainer)}>
              {projects.map((project: ProjectType) => {
                return <ProjectCard projectData={project} />
              })}
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
