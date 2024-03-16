import * as stylex from "@stylexjs/stylex"
import { tokens } from "../tokens.stylex"
// import { MenuBar } from "../components/MenuBar"
import { ProjectCard, ProjectType } from "../components/project/ProjectCard"

export const Home = () => {
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
    <div {...stylex.props(styles.base)}>
      {/* <MenuBar /> */}
      <div>HELLO HOME PAGE</div>
      <ProjectCard projectData={project1} />
      <ProjectCard projectData={project2} />
    </div>
  )
}

const styles = stylex.create({
  base: {
    // maxHeight: "100vh",
    // marginTop: "30px",
    height: "100vh",
    // backgroundColor: "blue",
    backgroundColor: tokens.offWhite,

    // backgroundColor: colors.white,
  },

  menubar: {
    backgroundColor: "pink",
    height: "30px",
  },
})
