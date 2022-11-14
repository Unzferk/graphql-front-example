import {
  COURSE_ADDED,
  COURSE_DELETED,
  COURSE_LOADED,
  STUDENT_LOADED,
} from "../config/actionTypes";

const initialState = {
  courses: [],
  students: [],
};

export const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case COURSE_LOADED:
      return {
        ...state,
        courses: action.courses,
      };
    case STUDENT_LOADED:
      return {
        ...state,
        students: action.students,
      };
    case COURSE_ADDED:
      return [...state, action.courses];

    case COURSE_DELETED:
      const { uid } = action;
      return state.filter((courses) => courses.uid !== uid);

    default:
      return state;
  }
};
