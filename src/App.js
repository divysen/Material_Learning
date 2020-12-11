import React, { Component } from 'react';
import './App.css';
import { CssBaseline, SwipeableDrawer, List, ListItem, ListItemIcon, ListItemText,
         AppBar, Toolbar, IconButton, Icon, Container } from '@material-ui/core';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import ContactMailRoundedIcon from '@material-ui/icons/ContactMailRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import VerifiedUserRoundedIcon from '@material-ui/icons/VerifiedUserRounded';
import { Switch, Route, withRouter } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Team from './components/Team/Team';

class App extends Component {

  state = {
    drawer : false
  }

  openDrawer_handler = () => this.setState({ drawer : true });
  closeDrawer_handler = () => this.setState({ drawer : false });
  navigation_handler = (path) => {
    this.props.history.push(path);
    this.closeDrawer_handler();
  };

  render() {
    return (
      <React.Fragment>
        <CssBaseline/>
          <SwipeableDrawer 
          anchor='left' open={this.state.drawer} 
          onClose={() => this.closeDrawer_handler()} onOpen={() => this.openDrawer_handler()}>
            <List>
              <ListItem button onClick={() => this.navigation_handler('/')}>
                <ListItemIcon><HomeRoundedIcon/></ListItemIcon><ListItemText primary='Home' />
              </ListItem>
              <ListItem button onClick={() => this.navigation_handler('/about')}>
                <ListItemIcon><InfoRoundedIcon/></ListItemIcon><ListItemText primary='About Us' />
              </ListItem>
              <ListItem button onClick={() => this.navigation_handler('/services')}>
                <ListItemIcon><VerifiedUserRoundedIcon/></ListItemIcon><ListItemText primary='Services' />
              </ListItem>
              <ListItem button onClick={() => this.navigation_handler('/team')}>
                <ListItemIcon><GroupRoundedIcon/></ListItemIcon><ListItemText primary='Team' />
              </ListItem>
              <ListItem button onClick={() => this.navigation_handler('/contact')}>
                <ListItemIcon><ContactMailRoundedIcon/></ListItemIcon><ListItemText primary='Contact Us' />
              </ListItem>
            </List>
          </SwipeableDrawer>
          <AppBar position='static' color='transparent'>
            <Toolbar 
            style={{ backgroundImage: "linear-gradient( rgba(0, 0, 100, 0.45), rgba(0, 0, 0, 0.1) ), url('http://webiwork.com/wp-content/uploads/2019/12/banner2.jpg')",
            backgroundPosition: '', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
            backgroundColor: 'gray', height: '350px' }}>
              <IconButton edge='start' color='inherit' style={{ alignSelf: 'flex-start' }}>
                <img alt='logo' src='http://webiwork.com/wp-content/uploads/2019/07/newLogo.png' />
              </IconButton>
              <Icon edge='start' color='inherit' style={{ flexGrow: 1 }}></Icon>
              <IconButton edge='end' variant='text' style={{ alignSelf: 'flex-start', color: 'white' }} onClick={() => this.openDrawer_handler()}>
                <MenuRoundedIcon/>
              </IconButton>
            </Toolbar>
            <Container children={''}>
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' exact component={About} />
                <Route path='/services' exact component={Services} />
                <Route path='/team' exact component={Team} />
                <Route path='/contact' exact component={Contact} />
              </Switch>
            </Container>
          </AppBar>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
