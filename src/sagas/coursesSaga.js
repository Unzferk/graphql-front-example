import { takeEvery, call, put, all } from "redux-saga/effects";

import * as types from "../config/actionTypes";
import * as service from "../services/CourseService";
import * as actions from "../actions/courseActions";
import * as alert from "../actions/alertActions";

//Worker Sagas
function* loadCourses() {
  try {
    const courses = yield call(service.getCourses);
    yield put(actions.coursesLoadedAction(courses));
  } catch (e) {
    console.log(e);
  }
}

function* addTask({ data }) {
  try {
    const task = yield call(service.addTask, data);
    yield put(actions.courseAddedAction(task));
    yield put(
      alert.setAlertAction({
        text: "Course Added!",
        color: "success",
      })
    );
  } catch (e) {
    yield put(
      alert.setAlertAction({
        text: "Course Not Added.",
        color: "danger",
      })
    );
  }
}

function* deleteTask({ id }) {
  try {
    yield call(service.deleteTask, id);
    yield put(actions.courseDeletedAction(id));
    yield put(
      alert.setAlertAction({
        text: "Course Deleted!",
        color: "success",
      })
    );
    // yield put(actions.loadTasksAction())
  } catch (e) {
    yield put(
      alert.setAlertAction({
        text: "Course Not Deleted.",
        color: "danger",
      })
    );
  }
}

//Watcher Sagas
function* watchLoadTasks() {
  yield takeEvery(types.LOAD_COURSE, loadCourses);
}

function* watchAddTask() {
  yield takeEvery(types.ADD_COURSE, addTask);
}

function* watchDeleteTask() {
  yield takeEvery(types.DELETE_COURSE, deleteTask);
}

export function* courseSaga() {
  yield all([watchLoadTasks(), watchAddTask(), watchDeleteTask()]);
}
