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


const drawerWidth = 240;

const useStyles = makeStyles((theme)=>{
  return{
    page: {
        backgroundColor: '#fff7e8',
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
      backgroundColor: '#fff7e8',
      color: '#2d88ff'
    },
    drawerTitle: {
      padding: theme.spacing(3)
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
      
      <Drawer
        className={classes.drawer}
        variant='permanent'
        anchor='left'
        classes={{paper: classes.drawerPaper}}
      >

        <Typography
          className={classes.drawerTitle}
          variant='h5' 
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
          {children}
      </div>
    </div>
  )
}

export default SiteLayout