import * as stylex from "@stylexjs/stylex"
import { projectStyles } from "../../tokens.stylex"
import { MenuBar } from "../menu/MenuBar"
import { Footer } from "../Footer"
import { HamburgerMenu } from "../menu/HamburgerMenu"
import { SliderBar } from "../menu/SliderBar"
import { useParams } from "react-router-dom"
import projects from "../../data/projects.json"

export type ProjectType = {
  id: string
  title: string
  titleForLink: string
  description: string
  technologies: Array<string>
  github: string
  liveLink: string
  tag: Array<string>
}

export const Project = () => {
  const { title: titleForLink } = useParams<{ title: string }>()

  const curProject = projects.find((project: ProjectType) => {
    if (project.titleForLink === titleForLink) {
      // console.log("project", project.titleForLink, project)
      return project
    }
  })

  console.log("What is this proejct: ", curProject)

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
            <div
              {...stylex.props(
                styles.header,
                styles.flexEndAlign,
                projectStyles.bigFont
              )}
            >
              {curProject?.title}
            </div>
            <div {...stylex.props(styles.flexEndAlign, projectStyles.slimFont)}>
              {curProject?.description}
            </div>
            <div {...stylex.props(styles.tagText, styles.flexEndAlign)}>
              {curProject?.tag.map((tagText: string) => {
                return (
                  <div
                    {...stylex.props(
                      projectStyles.slimFont,
                      projectStyles.smallFont
                    )}
                  >
                    #{tagText}
                  </div>
                )
              })}
            </div>
            <div {...stylex.props(styles.imgContainer)}>
              <div {...stylex.props(styles.img)}> Image 1 </div>
              <div {...stylex.props(styles.img)}> Image 2 </div>
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
    // backgroundColor: "pink",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "70rem",
    height: "100%",
    alignItems: "center",
    alignSelf: "center",
    justifySelf: "center",
  },
  flexEndAlign: { alignSelf: "flex-end" },
  header: {
    paddingTop: "3rem",
  },
  tagText: {
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
  },
  imgContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    width: " 100%",
    alignItems: "center",
  },

  img: {
    backgroundColor: "lightgray",
    objectFit: "cover",
    "@media (max-width: 768px)": {
      width: "100%",
      maxWidth: "30rem",
      height: "auto",
      aspectRatio: "1",
    },
    "@media (min-width: 767px)": {
      backgroundColor: "gray",
      width: "100%",
      maxWidth: "50rem",
      height: "auto",
      aspectRatio: "1",
    },
  },
})
