import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

function Nav() {
    return (
      <div>
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              Github Users Search 
            </Typography>
            </Toolbar>
       </AppBar>
      </div>
    );
  }
  
  export default Nav;
  