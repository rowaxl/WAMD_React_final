import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ReplayIcon from '@material-ui/icons/Replay';

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    buttonWrap: {
        display: 'flex',
        alignItems: 'center',
    },
})

function Header({ handleReload }) {
    const styles = useStyles()

    return(
        <AppBar position="static" color="primary">
            <Toolbar className={styles.root}>
                <Typography variant="h6" >
                    React Data Table
                </Typography>

                <div className={styles.buttonWrap}>
                    <Typography variant="h6" >
                        Reload Data:
                    </Typography>

                    <IconButton onClick={handleReload}>
                        <ReplayIcon style={{ color: 'white' }} />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header