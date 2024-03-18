import { MenuBar } from "../layouts/MenuBar"
import { ProjectCard, ProjectType } from "../project/ProjectCard"

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
    <div>
      <MenuBar />
      <div>Project page</div>
      <ProjectCard projectData={project1} />
      <ProjectCard projectData={project2} />
    </div>
  )
}
