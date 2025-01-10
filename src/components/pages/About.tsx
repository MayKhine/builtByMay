import { projectStyles } from "../../tokens.stylex"
import { MenuBar } from "../menuBar/MenuBar"
import * as stylex from "@stylexjs/stylex"
import { SliderBar } from "../menuBar/SliderBar"
import { HomeIntro } from "../home/HomeIntro"
import { Footer } from "../Footer"

export const About = () => {
  return (
    <div {...stylex.props(projectStyles.pageStyleForFooter)}>
      <div {...stylex.props(projectStyles.sliderPopUp)}>
        <SliderBar />
      </div>

      <div {...stylex.props(projectStyles.pageStyleForMenu)}>
        <MenuBar />
        <div {...stylex.props(projectStyles.base)}>
          <div {...stylex.props(styles.mainContainer)}>
            <div {...stylex.props(styles.aboutMeContainer)}>
              <img
                {...stylex.props(styles.profileImg)}
                src="https://avatars.githubusercontent.com/u/23218423?v=4"
              />
              <div {...stylex.props(styles.aboutMeSection)}>
                <div> Hello! I am May Myo Khine. </div>
              </div>
            </div>
            <div {...stylex.props(styles.experienceContainer)}>
              Edu, experience , skills
            </div>
            <div {...stylex.props(styles.connectContainer)}>
              Contact Connect
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
    // justifyContent: "center",
    // justifyItems: "center",
    // alignItems: "center",
    backgroundColor: "gray",
  },
  profileImg: {
    width: "20rem",
    height: "20rem",
    objectFit: "contain",
    borderRadius: "50%",
  },
  aboutMeContainer: {
    width: "100%",
    // backgroundColor: "pink",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: "3rem",
  },
  aboutMeSection: {
    // backgroundColor: "gray",
    minWidth: "20rem",
  },
  experienceContainer: {
    width: "100%",
    backgroundColor: "yellow",
  },
  connectContainer: {
    width: "100%",
    backgroundColor: "lightgray",
  },
})
