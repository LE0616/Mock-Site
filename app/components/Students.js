import React from 'react'
import { connect } from 'react-redux'
import { fetchStudents } from '../store'
import { NavLink } from 'react-router-dom'

class Students extends React.Component {

  async componentDidMount () {
    this.props.fetchInitialStudents();
  }

  render () {
    console.log(this.props.students);
    const students = this.props.students;

     return (
      <div>
        <h3>STUDENTS</h3>
        <ul>
          {
            students.map(student => {
              return (
                <li>
                  <NavLink to={`/students/${student.id}`} key={student.id}>{student.firstName} {student.lastName}</NavLink>
                  </li>
              )
            })
          }
        </ul>
        <NavLink to={'/students/add_student'}>New Student? Add yourself here.</NavLink>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  students: state.students.allStudents
});

const mapDispatchToProps = dispatch => ({fetchInitialStudents: () => {
  dispatch(fetchStudents()) }});

export default connect(mapStateToProps, mapDispatchToProps)(Students);
