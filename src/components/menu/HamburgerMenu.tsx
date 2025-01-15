import * as stylex from "@stylexjs/stylex"
import MenuRoundedIcon from "@mui/icons-material/MenuRounded"
import { Logo } from "./Logo"
import { useState } from "react"
import { DropDownMenu } from "./DropDownMenu"
export const HamburgerMenu = () => {
  const [toggleDropDownMenu, setToggleDropDownMenu] = useState<boolean>(false)
  return (
    <div {...stylex.props(styles.base)}>
      <Logo />
      <div>
        <MenuRoundedIcon
          {...stylex.props(styles.hamburgerIcon)}
          onClick={() => {
            setToggleDropDownMenu(!toggleDropDownMenu)
          }}
        />
        <div {...stylex.props(styles.dropDownMenuContainer)}>
          {toggleDropDownMenu && (
            <DropDownMenu
              closeDropDownMenu={() => {
                setToggleDropDownMenu(false)
              }}
            />
          )}
        </div>
      </div>
    </div>
  )
}

const styles = stylex.create({
  base: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "2rem",
    alignItems: "center",
  },
  hamburgerIcon: {
    cursor: "pointer",
    color: {
      default: "var(--primary-color)",
      ":hover": "var(--secondary-color)",
    },
  },
  dropDownMenuContainer: {
    position: "absolute",
    zIndex: "2",
    right: 0,
    width: "100%",
  },
})
