import { Link } from "gatsby"
import React from "react"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"

import Nav from "./nav"

import titleImg from "../images/se-title.png"
import banner from "../images/se-banner.jpg"
import theme from "../theme"

// Style

const useStyles = makeStyles({
  header: {
    background: theme.palette.secondary.main,
    marginBottom: "1.45rem",
  },
  banner: {
    backgroundImage: `url(${banner})`,
    backgroundPositionY: "-588px",
    filter: "brightness(1.5) opacity(80%)",
    paddingBottom: "1.45rem",
  },
  logo: {
    padding: "1.45rem 0 0 0",
    marginLeft: "-24px",
    "& a": {
      textDecoration: "none",
    },
    "& img": {
      maxWidth: "300px",
      padding: "10px 20px 15px 20px",
    },
  },
  logoBkg: {
    height: "159px",
    position: "absolute",
    backgroundColor: "#fff",
    width: "297px",
    top: "18px",
    zIndex: -1,
    filter: "opacity(.5)",
  },
  title: {
    fontFamily: "goudytwentyregular, serif",
    fontVariant: "small-caps",
    justifyContent: "flex-end",
    "& h1": {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      "& h1": {
        display: "none",
      },
    },
  },
  homeTitle: {
    "& h1": {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.down("md")]: {
      justifyContent: "flex-start",
      "& h1": {
        fontSize: "1.2rem",
      },
    },
  },
})

// Component

interface Links {
  name: string
  link: string
}

interface Props {
  location: any
  siteTitle: string
  menuLinks: Links[]
}

const Header = ({ location, menuLinks }: Props) => {
  const classes = useStyles()

  return (
    <header className={classes.header}>
      <div className={classes.banner}>
        <Container maxWidth="md">
          <div className={classes.logo}>
            <Link to="/">
              <span className={classes.logoBkg} />
              <img src={titleImg} alt="Scholarly Editing Logo" />
            </Link>
          </div>
        </Container>
      </div>
      <Nav location={location} menuLinks={menuLinks} />
    </header>
  )
}

export default Header
