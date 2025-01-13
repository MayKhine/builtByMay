import { projectStyles } from "../../tokens.stylex"
import { MenuBar } from "../menu/MenuBar"
import * as stylex from "@stylexjs/stylex"
import { SliderBar } from "../menu/SliderBar"
import { Footer } from "../Footer"
import { HamburgerMenu } from "../menu/HamburgerMenu"

export type workExperienceType = {
  company: string
  role: string
  duration: string
  location: string
}

const workExperiencesArr: Array<workExperienceType> = [
  {
    company: "Palmer Consulting Group",
    role: "Developer",
    duration: "Jun 2019 - Jun 2022",
    location: "Lisle, IL",
  },
  {
    company: "Northern Illinois University",
    role: "Research Assistant",
    duration: "Aug 2017 - May 2019",
    location: "DeKalb, IL",
  },
  {
    company: "Argonne National Laboratory",
    role: "Research Intern",
    duration: "May 2018 - Aug 2018",
    location: "Lemont, IL",
  },
  {
    company: "Argonne National Laboratory",
    role: "Research Intern",
    duration: "May 2017 - Aug 2017",
    location: "Lemont, IL",
  },
]

export const About = () => {
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
            <div {...stylex.props(styles.aboutMeContainer)}>
              <img
                {...stylex.props(styles.profileImg)}
                src="https://avatars.githubusercontent.com/u/23218423?v=4"
              />
              <div {...stylex.props(styles.aboutMeSection)}>
                <div
                  {...stylex.props(projectStyles.bigFont, styles.marginBottom)}
                >
                  Hello, I am May Myo Khine.
                </div>
                <div
                  {...stylex.props(
                    projectStyles.smallFont,
                    styles.marginBottom
                  )}
                >
                  I’m a developer with a passion for design and UI/UX. I am
                  looking for an exciting new job opportunity. I’m working on
                  personal projects to keep my skills sharp and my creativity
                  thriving.
                </div>
                <div
                  {...stylex.props(
                    projectStyles.smallFont,
                    styles.marginBottom
                  )}
                >
                  With 3 years of experience in database development and report
                  creation for clients using Oracle Database and Jasper Reports,
                  I’ve honed my ability to deliver efficient, timely solutions.
                  I’m a quick learner and adaptable professional. I am confident
                  in my ability to bring value to any team I join.
                </div>
                <div
                  {...stylex.props(
                    projectStyles.smallFont,
                    styles.marginBottom
                  )}
                >
                  Outside of tech, I enjoy cooking, hiking, curling up with a
                  good book in my cozy sunroom, and channeling my creativity
                  into art projects.
                </div>
                <div
                  {...stylex.props(
                    projectStyles.smallFont,
                    styles.marginBottom
                  )}
                >
                  Thank you for visiting! I'd love to connect and hear from you!
                </div>
              </div>
            </div>
            <div {...stylex.props(styles.lineDiv)} />
            <div {...stylex.props(styles.experienceContainer)}>
              <div {...stylex.props(styles.experienceSec)}>
                <div {...stylex.props(styles.marginBottom)}>Education </div>
                <div {...stylex.props(projectStyles.smallFont)}>
                  <div>Northern Illinois University</div>
                  <div {...stylex.props(styles.marginBottom)}>
                    Fall 2015 - Spring 2019
                  </div>
                  <div>Bachelor of Science</div>
                  <div>Major in Computer Science</div>
                  <div>Minor in Computer Science</div>

                  <div>Cumulative GPA 3.9 / 4.0</div>
                </div>
              </div>
              <div {...stylex.props(styles.experienceSec)}>
                <div {...stylex.props(styles.marginBottom)}>Experience </div>
                <div {...stylex.props(projectStyles.smallFont)}>
                  <div>{workExperiencesArr[0].company}</div>
                  <div>{workExperiencesArr[0].role}</div>
                  <div>{workExperiencesArr[0].duration}</div>
                  <div {...stylex.props(styles.marginBottom)}>
                    {workExperiencesArr[0].location}
                  </div>
                </div>

                <div {...stylex.props(projectStyles.smallFont)}>
                  <div>{workExperiencesArr[1].company}</div>
                  <div>{workExperiencesArr[1].role}</div>
                  <div>{workExperiencesArr[1].duration}</div>
                  <div {...stylex.props(styles.marginBottom)}>
                    {workExperiencesArr[1].location}
                  </div>
                </div>

                <div {...stylex.props(projectStyles.smallFont)}>
                  <div>{workExperiencesArr[2].company}</div>
                  <div>{workExperiencesArr[2].role}</div>
                  <div>{workExperiencesArr[2].duration}</div>
                  <div {...stylex.props(styles.marginBottom)}>
                    {workExperiencesArr[2].location}
                  </div>
                </div>

                <div {...stylex.props(projectStyles.smallFont)}>
                  <div>{workExperiencesArr[3].company}</div>
                  <div>{workExperiencesArr[3].role}</div>
                  <div>{workExperiencesArr[3].duration}</div>
                  <div {...stylex.props(styles.marginBottom)}>
                    {workExperiencesArr[3].location}
                  </div>
                </div>
              </div>
              <div {...stylex.props(styles.experienceSec)}>
                <div {...stylex.props(styles.marginBottom)}>
                  Technical Skills
                </div>
                <div {...stylex.props(projectStyles.smallFont)}>
                  <div>TypeScript</div>
                  <div>JavaScript</div>
                  <div>HTML</div>
                  <div>CSS</div>
                  <div>UI/UX Design</div>
                  <div>StyleX</div>
                  <div>React.js</div>
                  <div>Node.js</div>
                  <div>RESTful APIs</div>
                  <div>PL/SQL</div>
                  <div>SQL</div>
                  <div>Oracle Database</div>
                  <div>Figma</div>
                  <div>Tableau</div>
                  <div>PowerBI</div>
                </div>
              </div>
              <div {...stylex.props(styles.experienceSec)}>
                <div {...stylex.props(styles.marginBottom)}>
                  Prev Experience
                </div>
                <div {...stylex.props(projectStyles.smallFont)}>
                  <div>C++</div>
                  <div>Python</div>
                  <div>Assembler</div>
                  <div>Oracle Report Builder</div>
                  <div>Oracle Form Builder</div>
                  <div {...stylex.props(styles.marginBottom)}>
                    JasperSoft Studio
                  </div>
                </div>

                <div {...stylex.props(styles.marginBottom)}>Languages</div>
                <div {...stylex.props(projectStyles.smallFont)}>
                  <div>English</div>
                  <div>Burmese</div>
                </div>
              </div>
            </div>
            <div {...stylex.props(styles.lineDiv)} />

            <div
              {...stylex.props(styles.experienceContainer, styles.marginBottom)}
            >
              <div {...stylex.props(styles.experienceSec)}>
                <div {...stylex.props(styles.marginBottom)}>Connect</div>
                <div {...stylex.props(styles.connectSec)}>
                  <a
                    {...stylex.props(
                      projectStyles.smallFont,
                      projectStyles.link
                    )}
                    href="https://www.linkedin.com/in/maykhine/"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                  <a
                    {...stylex.props(
                      projectStyles.smallFont,
                      projectStyles.link
                    )}
                    href="https://github.com/MayKhine"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </div>
              </div>
              <div {...stylex.props(styles.experienceSec)}>
                <div {...stylex.props(styles.marginBottom)}>Contact</div>
                <a
                  {...stylex.props(projectStyles.smallFont, projectStyles.link)}
                  href="mailto:maykhine.mmk@gmail.com"
                  target="_blank"
                >
                  maykhine.mmk@gmail.com
                </a>
              </div>
              <div {...stylex.props(styles.experienceSec)}></div>
              <div {...stylex.props(styles.experienceSec)}></div>
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
    // width: "100%",
    height: "100%",
    maxWidth: "70rem",
    // backgroundColor: "gray",
    justifySelf: "center",
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
    minWidth: "20rem",
    maxWidth: "40rem",
  },
  marginBottom: { marginBottom: "1rem" },
  lineDiv: {
    borderBottom: "1px solid var(--secondary-color)",
    width: "100%",
    marginTop: "2rem",
    marginBottom: "2rem",
  },

  experienceContainer: {
    // backgroundColor: "lightgray",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    gap: "2rem",
  },
  experienceSec: {
    maxWidth: "15rem",
    minWidth: "7rem",
    width: "100%",
    // backgroundColor: "pink",
  },
  connectSec: {
    display: "flex",
    flexDirection: "column",
  },
})
