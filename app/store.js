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
    console.log('CAMPUS ID INSIDE THUNK', id);
    const { data } = await axios.get(`/api/campuses/${id}`);
    console.log('SINGLE_CAMPUS_INSIDE_THUNK: ', data);
    dispatch(gotSingleCampus(data));
  }
}
export const fetchStudent = (id) => {
  return async (dispatch) => {
    console.log('STUDENT ID INSIDE THUNK', id);
    const { data } = await axios.get(`/api/students/${id}`);
    console.log('SINGLE_STUDENT_INSIDE_THUNK: ', data);
    dispatch(gotSingleStudent(data));
  }
}

//Posting new instance
export const postCampus = (campus) => {
  return async (dispatch) => {
    const { data } = await axios.post('/api/campuses', campus);
    console.log('POSTED_CAMPUS_INSIDE_THUNK: ', data);
    dispatch(addCampus(data));
  }
}

export const postStudent = (student) => {
  return async (dispatch) => {
    const { data } = await axios.post('/api/students', student);
    console.log('POSTED_STUDENT_INSIDE_THUNK: ', data);
    dispatch(addStudent(data));
  }
}



export default createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware.withExtraArgument({axios}),
    loggingMiddleware
  )
)

