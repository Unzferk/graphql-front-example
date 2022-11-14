import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { logoutUserAction } from "../../../actions/userActions";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./styles.css";
import Alert from "../Alert/Alert.jsx";

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

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logoutUserAction());
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar className="navbar">
          <Typography variant="h6" className={classes.title}>
            React-Graphql
          </Typography>
          {user && (
            <Button
              color="inherit"
              className="btn-sm float-right"
              onClick={handleLogout}
            >
              Logout
            </Button>
          )}

          {!user && (
            <>
              <NavLink
                to="/register"
                className="btn btn-link btn-sm float-right shadow-none"
                activeClassName="btn text-white"
              >
                Register
              </NavLink>

              <NavLink
                to="/login"
                className="btn btn-link btn-sm float-right shadow-none"
                activeClassName="btn text-white"
              >
                Login
              </NavLink>
            </>
          )}
        </Toolbar>
      </AppBar>

      <hr />

      <Alert />
    </>
  );
};

export default Header;
