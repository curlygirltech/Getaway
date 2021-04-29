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
}));

export default function Nav(props) {
  const classes = useStyles();
  const { currentUser, handleLogout } = props;

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
              
              <MenuIcon />
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
            {

              currentUser &&
            <>
                <Link>homes</Link>
            </>
            }
          </Toolbar>
        </AppBar>
      </div>
      {/* <div>
      <Link to='/login'>Login</Link>
    </div> */}
    </>
  );
}
