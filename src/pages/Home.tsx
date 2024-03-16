import * as stylex from "@stylexjs/stylex"
import { tokens } from "../tokens.stylex"
import { MenuBar } from "../components/MenuBar"
import { ProjectCard, ProjectType } from "../components/project/ProjectCard"

export const Home = () => {
  const project1: ProjectType = { title: "TEST", text: "TEST TEST TEST" }
  return (
    <div>
      <MenuBar />
      <div {...stylex.props(styles.base)}>Helloooo</div>
      <ProjectCard projectData={project1} />
    </div>
  )
}

const styles = stylex.create({
  base: {
    // maxHeight: "100vh",
    // height: "100vh",
    // backgroundColor: "blue",
    backgroundColor: tokens.darkBlue2,

    // backgroundColor: colors.white,
  },

  menubar: {
    backgroundColor: "pink",
    height: "30px",
  },
})
