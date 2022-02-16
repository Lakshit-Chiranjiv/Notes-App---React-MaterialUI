import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles({
    page: {
        backgroundColor: ' #fff3e6',
        width: '100%'
    }
})

const SiteLayout = ({children}) => {
    const classes = useStyles();
  return (
    <div className={classes.page} >
        {children}
    </div>
  )
}

export default SiteLayout