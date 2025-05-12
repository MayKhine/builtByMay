import { projectStyles } from "../../tokens.stylex"
import { MenuBar } from "../menu/MenuBar"
import * as stylex from "@stylexjs/stylex"
import { SliderBar } from "../menu/SliderBar"
import { Footer } from "../Footer"
import { HamburgerMenu } from "../menu/HamburgerMenu"
import { motion } from "motion/react"
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
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { scale: 0.5 },
                  visible: {
                    scale: 1,
                    transition: {
                      duration: 0.2,
                      ease: "easeInOut",
                    },
                  },
                }}
              >
                <img
                  {...stylex.props(styles.profileImg)}
                  src="https://avatars.githubusercontent.com/u/23218423?v=4"
                />
              </motion.div>

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
                  I’m a developer with a love for thoughtful design and clean
                  code. I’m currently looking for my next opportunity where I
                  can grow, collaborate, and build great user experiences.
                </div>
                <div
                  {...stylex.props(
                    projectStyles.smallFont,
                    styles.marginBottom
                  )}
                >
                  I specialize in crafting responsive, intuitive web apps using
                  React, TypeScript, and modern UI tools. With 3 years of
                  experience as a database developer, I bring a strong
                  foundation in data and a detail-oriented mindset to everything
                  I build. Whether I’m bringing designs to life or fine-tuning
                  performance, I care deeply about both form and function.
                </div>

                <div
                  {...stylex.props(
                    projectStyles.smallFont,
                    styles.marginBottom
                  )}
                >
                  I’m sharpening my skills even further through Google’s UI/UX
                  Design and Data Analytics certifications. I’m a continuous
                  learner who loves exploring the intersection of design, data,
                  and development. Recently, I created my first Lottie animation
                  from scratch for my BiteBot app and have been diving deeper
                  into accessibility and design systems. I'm passionate about
                  creating tools that are not only useful but delightful to use.
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

                <div>
                  <a
                    {...stylex.props(styles.resumeDownload)}
                    href="/MayMyoKhine_Developer_Resume.pdf"
                    download="MayMyoKhine_Developer_Resume.pdf"
                  >
                    <div>Download My Resume</div>
                  </a>
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
                  <div>Minor in Art</div>

                  <div>GPA 3.9 / 4.0</div>
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
                  <div>React.js</div>
                  <div>TypeScript</div>
                  <div>JavaScript</div>
                  <div>HTML</div>
                  <div>CSS</div>
                  <div>UI/UX Design</div>
                  <div>Tailwind</div>
                  <div>StyleX</div>
                  <div>Lottie</div>
                  <div>Figma</div>
                  <div>Node.js</div>
                  <div>Express.js</div>
                  <div>RESTful APIs</div>
                  <div>Docker</div>
                  <div>Nginx</div>
                  <div>PL/SQL</div>
                  <div>SQL</div>
                  <div>Oracle Database</div>
                  <div>Tableau</div>
                  <div>PowerBI</div>
                  <div>Jasper Reports</div>
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
    width: "100%",
    height: "100%",
    maxWidth: "70rem",
    justifySelf: "center",
    alignSelf: "center",
  },
  profileImg: {
    width: "20rem",
    height: "20rem",
    objectFit: "contain",
    borderRadius: "50%",
  },
  aboutMeContainer: {
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
    "@media (max-width: 768px)": {
      flexWrap: "wrap",
    },
    justifyItems: "space-between",
    alignContent: "space-between",
    justifyContent: "space-between",
  },
  experienceSec: {
    maxWidth: "15rem",
    minWidth: "5rem",
    width: "100%",
    // backgroundColor: "pink",
  },
  connectSec: {
    display: "flex",
    flexDirection: "column",
  },
  resumeDownload: {
    cursor: "pointer",

    textDecoration: "none",
    color: {
      default: "var(--text-color)",
      ":hover": "var(--primary-color)",
    },
  },
})
