import * as styleX from "@stylexjs/stylex"

export const Section1 = () => {
  return (
    <div {...styleX.props(styles.base)}>
      <div {...styleX.props(styles.spaceDiv)}></div>
      {/* <div {...styleX.props(styles.flexDiv)}> */}
      <div {...styleX.props(styles.centerDiv)}>
        <h2> Hello, I am May and I built stuffs.</h2>
        <p>This is the subtext about May.</p>
      </div>
      {/* </div> */}
    </div>
  )
}

const styles = styleX.create({
  base: {
    backgroundColor: "lightgreen",
    height: "100vh ",
    // paddingTop: "30px",
    scrollSnapAlign: "start",
  },
  spaceDiv: {
    height: "30px",
    // backgroundColor: "gray",
  },
  flexDiv: {
    display: "flex",
    // flexDirection: "column",
    justifyContent: "center",
  },
  centerDiv: {
    display: "flex",
    height: "85%",
    flexDirection: "column",
    // backgroundColor: "pink",
    // alignSelf: "center",
    justifyContent: "center",
    // justifyItems: "center",
    // alignContent: "center",
    alignItems: "center",
  },
})
