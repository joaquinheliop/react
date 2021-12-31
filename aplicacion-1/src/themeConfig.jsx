import { createTheme, AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";



const theme = createTheme({

    palette: {
        primary: {
            main: purple[500]
        }
    }
})

export default theme