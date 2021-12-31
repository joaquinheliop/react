import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core'
import InboxIcon from '@mui/icons-material/Inbox'
import DraftsIcon from '@mui/icons-material/Drafts'
import CloudIcon from '@mui/icons-material/Cloud'
import HomeIcon from '@mui/icons-material/Home'



function Listas() {
    return (
        <div>
            <List component='nav'>
                <ListItem button="true">
                    <ListItemIcon>
                        <CloudIcon></CloudIcon>
                    </ListItemIcon>
                    <ListItemText primary="Primer elemento" />
                </ListItem>

                <ListItem button="true">
                    <ListItemIcon>
                        <HomeIcon></HomeIcon>
                    </ListItemIcon>
                    <ListItemText primary="Segundo elemento" />
                </ListItem>

                <Divider></Divider>

                <ListItem button="true">
                    <ListItemIcon>
                        <HomeIcon></HomeIcon>
                    </ListItemIcon>
                    <ListItemText primary="Tercer elemento" />
                </ListItem>

                <Divider></Divider>

            </List>
        </div>
    )
}

export default Listas
