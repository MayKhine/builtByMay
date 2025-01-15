import { motion } from "motion/react"
import { projectStyles } from "../../tokens.stylex"
import { useNavigate } from "react-router-dom"
import * as stylex from "@stylexjs/stylex"

export const Logo = () => {
  const navigate = useNavigate()

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { scale: 0.3 },
        visible: {
          scale: 1,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
          },
        },
      }}
      {...stylex.props(
        styles.logo,
        projectStyles.bigFont,
        projectStyles.thickFont
      )}
      onClick={() => {
        navigate("/")
      }}
    >
      M
    </motion.div>
  )
}

const styles = stylex.create({
  logo: {
    opacity: ".8",
    width: "4rem",
    height: "4rem",
    backgroundColor: {
      default: "var(--secondary-color)",
      ":hover": "var(--primary-color)",
    },
    borderRadius: "50%",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    // fontWeight: "600",
    // fontSize: "1.2rem",
    cursor: "pointer",
  },
})
