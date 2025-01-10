import * as stylex from "@stylexjs/stylex"
import { MenuBar } from "../menuBar/MenuBar"
import { HomeIntro } from "../home/HomeIntro"
import { Footer } from "../Footer"
import { SliderBar } from "../menuBar/SliderBar"
import { projectStyles } from "../../tokens.stylex"

export const Home = () => {
  return (
    <div {...stylex.props(projectStyles.pageStyleForFooter)}>
      <div {...stylex.props(projectStyles.sliderPopUp)}>
        <SliderBar />
      </div>

      <div {...stylex.props(projectStyles.pageStyleForMenu)}>
        <MenuBar />
        <div {...stylex.props(projectStyles.base)}>
          <HomeIntro />
        </div>
      </div>
      <Footer />
    </div>
  )
}
