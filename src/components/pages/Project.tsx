import * as stylex from "@stylexjs/stylex"
import { projectStyles } from "../../tokens.stylex"
import { MenuBar } from "../menu/MenuBar"
import { Footer } from "../Footer"
import { HamburgerMenu } from "../menu/HamburgerMenu"
import { SliderBar } from "../menu/SliderBar"
import { useParams } from "react-router-dom"
import projects from "../../data/projects.json"
import { motion } from "motion/react"
// import { useTheme } from "../../ThemeContext"
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
  projectImg?: string
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
  // const tempTheme = useTheme()
  // console.log("thee: ", tempTheme)

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
                projectStyles.projectTitle
              )}
            >
              {curProject?.title}
            </div>

            {curProject?.liveLink && (
              <div
                {...stylex.props(
                  styles.flexEndAlign,
                  projectStyles.bigFont,
                  styles.projectLiveLinkContainer
                )}
                onClick={() => {
                  window.open(curProject?.liveLink, "_blank")
                }}
              >
                <div>
                  <div {...stylex.props(styles.redDotContainer)}>
                    <motion.div
                      style={{
                        borderRadius: "50%",
                        backgroundColor: "red",
                        width: ".8rem", // Size of the red dot
                        height: ".8rem", // Size of the red dot
                      }}
                      animate="visible"
                      variants={{
                        visible: {
                          boxShadow: [
                            "0 0 8px rgba(255, 0, 0, 1)", // Initial subtle glow
                            "0 0 15px rgba(255, 0, 0, 0.8)", // Expanding glow
                            "0 0 25px rgba(255, 0, 0, 0.6)", // Glowing rays expanding
                            "0 0 50px rgba(255, 0, 0, 0.4)", // Soft, wide red rays
                            "0 0 80px rgba(255, 0, 0, 0.2)", // Even wider rays
                          ],
                          transition: {
                            duration: 1.5, // Duration for one complete cycle of pulsation
                            ease: "easeInOut",
                            repeat: Infinity, // Continuous pulsation
                            repeatType: "loop", // Looping without reversing
                          },
                        },
                      }}
                    ></motion.div>
                  </div>
                </div>
                <div> Live Link</div>
              </div>
            )}
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

            <div {...stylex.props(styles.goalFeatureContainer)}>
              <div>
                <div>Project Goal</div>
                <div {...stylex.props(projectStyles.slimFont)}>
                  {curProject?.goal}
                </div>
              </div>
              <div>
                <div>Project Features</div>
                <div {...stylex.props(projectStyles.slimFont)}>
                  {curProject?.features.map((eachFeature) => {
                    return <div> {eachFeature} </div>
                  })}
                </div>
              </div>

              <div>
                <div>Contributors</div>
                <div>
                  {curProject?.contributors.map((eachPerson) => {
                    return (
                      <div>
                        <div {...stylex.props(projectStyles.slimFont)}>
                          {eachPerson.name}, {eachPerson.role}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div {...stylex.props(styles.infoContainer)}>
              <div {...stylex.props(styles.info)}>
                <div>Technologies</div>
                <div {...stylex.props(projectStyles.slimFont)}>
                  {curProject?.technologies.map((eachTech) => {
                    return <div> {eachTech} </div>
                  })}
                </div>
              </div>
              <div {...stylex.props(styles.info)}>
                <div>Date</div>
                <div {...stylex.props(projectStyles.slimFont)}>
                  {curProject?.date}
                </div>
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

  projectLiveLinkContainer: {
    color: "green",
    backgroundColor: "white",
    border: "1px solid var(--primary-color)",
    marginTop: ".5rem",
    marginBottom: ".5rem",
    padding: ".5rem",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  projectLiveLink: {
    textDecoration: "none",
    color: {
      default: "green",
      ":hover": "darkgreen",
    },
  },

  redDotContainer: {
    width: "2rem",
    height: "2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "green",
  },

  goalFeatureContainer: {
    marginTop: "2rem",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: "2rem",
  },

  infoContainer: {
    display: "flex",
    width: "100%",
    marginTop: "2rem",
    gap: "1rem",
    // backgroundColor: "red",
  },

  info: {
    minWidth: "5rem",
    width: "30%",
    alignSelf: "flex-start",
    // backgroundColor: "pink",
  },

  imgContainer: {
    display: "flex",
    flexDirection: "column",
    width: " 100%",
    alignItems: "center",
  },

  imgDiv: {
    display: "flex",
    backgroundColor: "var(--secondary-color)",
    // border: "1px solid black",
    border: "1px solid var(--primary-color)",

    "@media (max-width: 768px)": {
      width: "85%",
      marginTop: "2rem",
      marginBottom: "1rem",
    },
    "@media (min-width: 769px)": {
      maxWidth: "40rem",
      marginTop: "3rem",
      marginBottom: "2rem",
    },
  },

  img: {
    width: "100%",
    height: "auto",
  },
})
