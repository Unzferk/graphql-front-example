import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useDispatch } from "react-redux";
import { studentsLoadedAction } from "../../../actions/courseActions";

const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
});

const Courses = ({ courses }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const setStudents = (students) => {
    dispatch(studentsLoadedAction({ students: students }));
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Code</TableCell>
            <TableCell>Title</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courses.map((course) => (
            <TableRow
              key={course.code}
              onClick={() => setStudents(course.students)}
            >
              <TableCell component="th" scope="row">
                {course.code}
              </TableCell>
              <TableCell>{course.title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Courses;
