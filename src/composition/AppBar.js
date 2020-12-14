import React from 'react';
import AppBar2 from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function AppBar(){
    return(
        <>
         <AppBar2 position="static">
            <Toolbar>
                <Typography variant="h6" >
                Angular 9 MatTable CRUD Example
                </Typography>
            </Toolbar>
        </AppBar2>
        </>
    )
}
export default AppBar