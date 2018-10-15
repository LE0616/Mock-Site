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

export default createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware.withExtraArgument({axios}),
    loggingMiddleware
  )
)

