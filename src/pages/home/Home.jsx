import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  loadCoursesAction,
  studentsLoadedAction,
} from "../../actions/courseActions";
import Courses from "../../components/Home/CoursesList/Courses";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CourseDetails from "../../components/Home/CourseDetails/CourseDetails";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export const Home = () => {
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.courses);
  const classes = useStyles();

  useEffect(() => {
    dispatch(loadCoursesAction());
  }, [dispatch]);

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Courses courses={courses} />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <CourseDetails />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Home;
