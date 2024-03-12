import * as styleX from "@stylexjs/stylex"
export const MenuBar = () => {
  return <div {...styleX.props(styles.base)}> Menu Bar</div>
}

const styles = styleX.create({
  base: {
    backgroundColor: "pink",
    position: "fixed",
    top: "0",
    width: "100%",
  },
})
