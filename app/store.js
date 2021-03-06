import {createStore, applyMiddleware} from 'redux'
import axios from 'axios'
import rootReducer from './reducers'
import loggingMiddleware from 'redux-logger' // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk' // https://github.com/gaearon/redux-thunk


const gotCampuses = (allCampuses) => ({type: 'GOT_CAMPUSES_FROM_SERVER', allCampuses})
const gotStudents = (allStudents) => ({type: 'GOT_STUDENTS_FROM_SERVER', allStudents})

const gotSingleCampus = (singleCampus) => ({type: 'GOT_SINGLE_CAMPUS_FROM_SERVER', singleCampus})
const gotSingleStudent = (singleStudent) => ({type: 'GOT_SINGLE_STUDENT_FROM_SERVER', singleStudent})

const addCampus = (campus) => ({type: 'ADD_CAMPUS', campus})
const addStudent = (student) => ({type: 'ADD_STUDENT', student})

const removeCampus = (index) => ({type: 'REMOVE_CAMPUS', index})
const removeStudent = (index) => ({type: 'REMOVE_STUDENT', index})

//Fetching ALL
export const fetchCampuses = () => {
  return async (dispatch) => {
    const { data } = await axios.get('/api/campuses');
    dispatch(gotCampuses(data));
  }
}
export const fetchStudents = () => {
  return async (dispatch) => {
    const { data } = await axios.get('/api/students');
    dispatch(gotStudents(data));
  }
}
//Fetching ONE
export const fetchCampus = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(`/api/campuses/${id}`);

    dispatch(gotSingleCampus(data));
  }
}
export const fetchStudent = (id) => {
  return async (dispatch) => {
     const { data } = await axios.get(`/api/students/${id}`);

    dispatch(gotSingleStudent(data));
  }
}
//Posting new instance
export const postCampus = (campus) => {
  return async (dispatch) => {
    const { data } = await axios.post('/api/campuses', campus);

    dispatch(addCampus(data));
  }
}
export const postStudent = (student) => {
  return async (dispatch) => {
    const { data } = await axios.post('/api/students', student);

    dispatch(addStudent(data));
  }
}
//Deleting an instance
export const deleteStudent = (id, index) => {
  return async (dispatch) => {
  await axios.delete(`/api/students/${id}`);

  dispatch(removeStudent(index));
  }
}
export const deleteCampus = (id, index) => {
  return async (dispatch) => {
  await axios.delete(`/api/campuses/${id}`);

  dispatch(removeCampus(index));
  }
}
//Updating an instance
export const updateStudent = (id, studentChanges) => {
  return async (dispatch) => {
    await axios.put(`/api/students/${id}`, studentChanges);

    const { data } = await axios.get(`/api/students/${id}`);
    dispatch(gotSingleStudent(data));
  }
}
export const updateCampus = (id, campusChanges) => {
  return async (dispatch) => {
    await axios.put(`/api/campuses/${id}`, campusChanges);

    const { data } = await axios.get(`/api/campuses/${id}`);
    dispatch(gotSingleCampus(data));
  }
}


export default createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware.withExtraArgument({axios}),
    loggingMiddleware
  )
)

