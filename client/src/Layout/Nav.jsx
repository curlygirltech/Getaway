import React from "react";
import { Link } from "react-router-dom";
// import {currentUser} from '../App'
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Portal from "@material-ui/core/Portal";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  // dropdown: {
  //   flexDirection: column
  // }
}));

export default function Nav(props) {
  const classes = useStyles();
  const { currentUser, handleLogout } = props;
  

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" style={{ backgroundColor: "#214E08" }}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <ClickAwayListener onClickAway={handleClickAway}>
                <div>
                  <MenuIcon type="button" onClick={handleClick}>
                    {/* Open menu dropdown */}
                  </MenuIcon>
                  {open ? (
                    <Portal>
                      <div className={classes.dropdown}>
                        <Link to="/homes">Homes</Link>
                        {currentUser.host? <Link to= '/createhomes'>MyAccount</Link> :
                          <Link to="/bookingconfirmation">MyAccount</Link>}
                      </div>
                    </Portal>
                  ) : null}
                </div>
              </ClickAwayListener>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              ShareSpace
            </Typography>
            {currentUser ? (
              <>
                <p>{currentUser.username}</p>
            
                <Button onClick={handleLogout}>Logout</Button>
              </>
            ) : (
              <Button style={{ backgroundColor: "white" }}>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  Login
                </Link>
              </Button>
            )}
            {currentUser && (
              <>
                <Link></Link>
              </>
            )}
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}
