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
  images: Array<imageType>
}

type imageType = {
  imageDesc: string
  imageLink: string
}

export const Project = () => {
  const { title: titleForLink } = useParams<{ title: string }>()
  const curProject = projects.find((project: ProjectType) => {
    if (project.titleForLink === titleForLink) {
      // console.log("project", project.titleForLink, project)
      return project
    }
  })

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
              {curProject?.tag.map((tagText: string, index) => {
                return (
                  <div
                    {...stylex.props(
                      projectStyles.slimFont,
                      projectStyles.smallFont
                    )}
                    key={index}
                  >
                    #{tagText}
                  </div>
                )
              })}
            </div>

            {curProject?.images[0]?.imageLink && (
              <div {...stylex.props(styles.imgDiv)}>
                <img
                  {...stylex.props(styles.img)}
                  src={curProject?.images[0].imageLink}
                  alt={curProject?.images[0].imageDesc}
                ></img>
              </div>
            )}

            <div {...stylex.props(styles.infoContainer)}>
              <div {...stylex.props(styles.info)}>
                <div>Date</div>
                <div {...stylex.props(projectStyles.slimFont)}>Dec 2023</div>
              </div>
              <div {...stylex.props(styles.info)}>
                <div>Role</div>
                <div {...stylex.props(projectStyles.slimFont)}>Developer</div>
              </div>
              <div {...stylex.props(styles.info)}>
                <div>Links</div>
                <div>
                  {curProject?.liveLink && (
                    <a
                      {...stylex.props(
                        projectStyles.slimFont,
                        projectStyles.link,
                        projectStyles.italicFont
                      )}
                      href={curProject?.liveLink}
                      target="_blank"
                    >
                      Live Link
                    </a>
                  )}
                </div>
                <div>
                  {curProject?.github && (
                    <a
                      {...stylex.props(
                        projectStyles.slimFont,
                        projectStyles.link,
                        projectStyles.italicFont
                      )}
                      href={curProject?.github}
                      target="_blank"
                    >
                      GitRepo
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div {...stylex.props(styles.imgContainer)}>
              {curProject?.images.map((image, index) => {
                if (index == 0) {
                  return
                }
                return (
                  <div {...stylex.props(styles.imgDiv)} key={index}>
                    <img
                      {...stylex.props(styles.img)}
                      src={image.imageLink}
                      alt={image.imageDesc}
                    ></img>
                  </div>
                )
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
  flexEndAlign: { alignSelf: "flex-end", textAlign: "end" },
  header: {
    paddingTop: "3rem",
  },
  tagText: {
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
  },
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    gap: "2rem",
    justifyContent: "space-between",
    marginTop: "2rem",
  },

  info: {
    alignSelf: "center",
    textAlign: "center",
    maxWidth: "40rem",
    minWidth: "5rem",
    width: "100%",
  },

  imgContainer: {
    display: "flex",
    flexDirection: "column",
    // gap: "2rem",
    width: " 100%",
    alignItems: "center",
  },
  imgDiv: {
    display: "flex",
    backgroundColor: "var(--secondary-color)",
    "@media (max-width: 768px)": {
      width: "85%",
      padding: "2rem",
      marginTop: "1rem",
      marginBottom: "1rem",
    },
    "@media (min-width: 767px)": {
      maxWidth: "40rem",
      padding: "3.5rem",
      marginTop: "2rem",
      marginBottom: "2rem",
    },
  },

  img: {
    // backgroundColor: "gray",
    "@media (max-width: 768px)": {
      width: "100%",
      height: "auto",
    },
    "@media (min-width: 767px)": {
      width: "100%",
      height: "auto",
    },
  },
})
