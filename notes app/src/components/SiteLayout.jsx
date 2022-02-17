import { makeStyles } from '@mui/styles';
import React from 'react';
import Typography from '@mui/material/Typography';
import { Drawer, listItemAvatarClasses } from '@mui/material';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate,useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {format} from 'date-fns';


const drawerWidth = 240;

const useStyles = makeStyles((theme)=>{
  return{
    page: {
        // backgroundColor: '#fff7e8',
        width: '100%',
        padding: theme.spacing(4)
    },
    drawer: {
      width: drawerWidth
    },
    drawerPaper: {
      width: drawerWidth,
      
    },
    main: {
      display: 'flex',
    },
    activeItem: {
      backgroundColor: '#ffdec8 !important',
    },
    drawerTitle: {
      padding: theme.spacing(3)
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px) !important`
    },
    extraDiv: theme.mixins.toolbar,
    dateText: {
      flexGrow: '1'
    }
}
})

const SiteLayout = ({children}) => {
    const classes = useStyles();

    const navigate = useNavigate();
    const location = useLocation();

    const sidebarList = [
      {
        itemName: "My Notes",
        itemIcon: <EventNoteRoundedIcon color='secondary'/>,
        itemPath: "/"
      },
      {
        itemName: "Create Note",
        itemIcon: <BorderColorRoundedIcon color='secondary'/>,
        itemPath: "/create"
      }
    ]

  return (
    <div className={classes.main}>

      <AppBar
        className={classes.appbar}
      >
        <Toolbar>
          <Typography variant='h6'className={classes.dateText}>
            Today is the {format(new Date(),'do MMMM Y')}
          </Typography>
          <Typography>
            Hey, Lakshit
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Drawer
        className={classes.drawer}
        variant='permanent'
        anchor='left'
        classes={{paper: classes.drawerPaper}}
      >

        <Typography
          className={classes.drawerTitle}
          variant='h5' 
          color='primary'
        >
          Note Tiles 👀
        </Typography>

        <List>
          {
            sidebarList.map((item)=>(
              <ListItemButton
                key={item.itemName}
                onClick={()=>navigate(item.itemPath)}
                className={location.pathname == item.itemPath ? classes.activeItem : null}
              >
                <ListItemIcon>
                  {item.itemIcon}
                </ListItemIcon>
                <ListItemText primary={item.itemName} />
              </ListItemButton>
            ))
          }
        </List>

      </Drawer>

      <div className={classes.page} >
        <div className={classes.extraDiv}></div>
          {children}
      </div>
    </div>
  )
}

export default SiteLayout