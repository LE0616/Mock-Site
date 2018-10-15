import { combineReducers } from 'redux'
import { ENOTCONN } from 'constants'

const initialCampuses = ({
  allCampuses: [],
  singleCampus: {}
})

const initialStudents = ({
  allStudents: [],
  singleStudent: {}
})

const campusReducer = (campuses = initialCampuses, action) => {
    switch(action.type) {

      case 'GOT_CAMPUSES_FROM_SERVER':
      return {...campuses, allCampuses: action.allCampuses}

      case 'GOT_SINGLE_CAMPUS_FROM_SERVER':
      return {...campuses, singleCampus: action.singleCampus}

      case 'ADD_CAMPUS':
        return { ...campuses, allCampuses:  [...campuses.allCampuses, action.campus]}

      default: return campuses;
    }
}

const studentReducer = (students = initialStudents, action) => {
    switch(action.type) {

      case 'GOT_STUDENTS_FROM_SERVER':
        return {...students, allStudents: action.allStudents}

      case 'GOT_SINGLE_STUDENT_FROM_SERVER':
        return {...students, singleStudent: action.singleStudent}

      case 'ADD_STUDENT':
        return {...students, allStudents: [...students.allStudents, action.student]}

      default: return students;
    }
}

const rootReducer = combineReducers({
    students: studentReducer,
    campuses: campusReducer
});

export default rootReducer
