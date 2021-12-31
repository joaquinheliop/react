import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'

import React, { Fragment } from 'react'

import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles, Button } from '@material-ui/core';



// Creo un estilo que despues voy a poder usar en mi funcion principal

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    menuButton: {
        marginRight: theme.spacing(4)
    },
    title: {
        flexGrow: 1
    }
}))


const NavBar = () => {
    const classes = useStyles()
    return (
        <Fragment>
            <AppBar>
                <Toolbar>
                    <IconButton color="inherit" aria-label="menu" className={classes.menuButton}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' className={classes.title}>
                        Dale Vaquita!
                    </Typography>
                    <Button variant="text" color="inherit">
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
        </Fragment>
    )
}

export default NavBar
