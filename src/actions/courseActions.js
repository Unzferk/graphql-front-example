import * as types from "../config/actionTypes";

export const loadCoursesAction = () => {
  return {
    type: types.LOAD_COURSE,
  };
};

export const coursesLoadedAction = (courses) => {
  return {
    type: types.COURSE_LOADED,
    courses,
  };
};

export const studentsLoadedAction = (students) => {
  return {
    type: types.STUDENT_LOADED,
    students,
  };
};

/**
 *
 * @param {title, description} data
 */
export const addCourseAction = (data) => {
  return {
    type: types.ADD_COURSE,
    data,
  };
};

export const courseAddedAction = (task) => {
  return {
    type: types.COURSE_ADDED,
    task,
  };
};

export const deleteCourseAction = (id) => {
  return {
    type: types.DELETE_COURSE,
    id,
  };
};

export const courseDeletedAction = (id) => {
  return {
    type: types.COURSE_DELETED,
    id,
  };
};
