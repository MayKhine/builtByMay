import * as stylex from "@stylexjs/stylex"
import { HomeIntro } from "../home/HomeIntro"
import { Footer } from "../Footer"
import { SliderBar } from "../menu/SliderBar"
import { projectStyles } from "../../tokens.stylex"
import { MenuBar } from "../menu/MenuBar"
import { HamburgerMenu } from "../menu/HamburgerMenu"

export const Home = () => {
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
          <HomeIntro />
        </div>
      </div>
      <Footer />
    </div>
  )
}
