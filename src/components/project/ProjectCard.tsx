import * as styleX from "@stylexjs/stylex"

export type ProjectType = {
  title: string
  text: string
}

type ProjectCardProps = {
  projectData: ProjectType
}

export const ProjectCard = ({ projectData }: ProjectCardProps) => {
  return (
    <div {...styleX.props(styles.base)}>
      {projectData.title}
      <div> {projectData.text}</div>
    </div>
  )
}

const styles = styleX.create({
  base: { backgroundColor: "blue" },
})
