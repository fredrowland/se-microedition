import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { navigate, withPrefix } from "gatsby"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"

import theme from "../theme"

// Style

const useStyles = makeStyles({
  nav: {
    "& div": {
      padding: "0 2.1rem 0 0",
    },
  },
  navBtn: {
    borderBottom: "3px solid transparent",
    borderRadius: 0,
    boxShadow: "none",
    "&:hover, &:focus": {
      backgroundColor: "transparent",
      borderBottomColor: theme.palette.primary.main,
    },
  },
  active: {
    borderBottomColor: theme.palette.primary.main,
  },
})

// Component

interface Links {
  name: string
  link: string
}

interface Props {
  location: string
  menuLinks: Links[]
}

const Layout = ({ location, menuLinks }: Props) => {
  const classes = useStyles()
  const isHome = location.toString() === withPrefix("/")

  return (
    <Container maxWidth="md" className={classes.nav}>
      <Grid container={true} component="nav">
        {menuLinks.map(link => {
          const loc = location.toString().replace(/\/+$/, "")
          const active =
            (isHome && link.link === "/") || loc.endsWith(link.link)
              ? classes.active
              : ""
          return (
            <Grid item={true} key={link.name} xs={6} sm="auto" md="auto">
              <Button
                size="large"
                className={`${classes.navBtn} ${active}`}
                onClick={() => navigate(link.link)}
              >
                {link.name}
              </Button>
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}

export default Layout
