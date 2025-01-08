import * as stylex from "@stylexjs/stylex"
import { MenuBar } from "../menuBar/MenuBar"
// import { ProjectCard, ProjectType } from "../project/ProjectCard"
// import { tokens } from "../../tokens.stylex"

export const Projects = () => {
  // const project1: ProjectType = {
  //   title: "Old Portfolio Project",
  //   text: "Github pages",
  //   link: "https://maykhine.github.io/portfolio/",
  // }

  // const project2: ProjectType = {
  //   title: "Old Todo Project",
  //   text: "Another Github pages",
  //   link: "https://maykhine.github.io/todo-app/",
  // }
  return (
    <div {...stylex.props(styles.page)}>
      <MenuBar />
      <div {...stylex.props(styles.base)}>project</div>
    </div>
  )
}

const styles = stylex.create({
  page: {
    height: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "var(--background-color)",
    color: "var(--text-color)",
  },

  base: { display: "flex" },
})
