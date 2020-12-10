import React, { Component } from 'react';
import './App.css';
import { CssBaseline, SwipeableDrawer, List, ListItem, ListItemIcon, ListItemText,
         AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import ContactMailRoundedIcon from '@material-ui/icons/ContactMailRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import VerifiedUserRoundedIcon from '@material-ui/icons/VerifiedUserRounded';

class App extends Component {

  state = {
    drawer : false
  }

  openDrawer_handler = () => this.setState({ drawer : true });

  render() {
    return (
      <React.Fragment>
        <CssBaseline/>
          <SwipeableDrawer 
          anchor='left' open={this.state.drawer} 
          onClose={() => this.setState({ drawer : false })} onOpen={() => this.setState({ drawer : true })}>
            <List>
              <ListItem button>
                <ListItemIcon><HomeRoundedIcon/></ListItemIcon><ListItemText primary='Home' />
              </ListItem>
              <ListItem button>
                <ListItemIcon><InfoRoundedIcon/></ListItemIcon><ListItemText primary='About Us' />
              </ListItem>
              <ListItem button>
                <ListItemIcon><VerifiedUserRoundedIcon/></ListItemIcon><ListItemText primary='Services' />
              </ListItem>
              <ListItem button>
                <ListItemIcon><GroupRoundedIcon/></ListItemIcon><ListItemText primary='Team' />
              </ListItem>
              <ListItem button>
                <ListItemIcon><ContactMailRoundedIcon/></ListItemIcon><ListItemText primary='Contact Us' />
              </ListItem>
            </List>
          </SwipeableDrawer>
          <AppBar position='static' color='transparent'>
            <Toolbar >
              <IconButton edge='start' variant='text' color='inherit' style={{ flexGrow: 1 }}>
                Webiwork Logo
              </IconButton>
              <IconButton edge='end' variant='text' color='inherit' onClick={() => this.openDrawer_handler()}>
                <MenuRoundedIcon/>
              </IconButton>
            </Toolbar>
          </AppBar>
      </React.Fragment>
    );
  }
}

export default App;


// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(1),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// export default function ButtonAppBar() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" className={classes.title}>
//             News
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }
