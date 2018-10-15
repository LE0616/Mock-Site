import React from 'react'
import NavLink from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchStudent } from '../store'


class SingleStudent extends React.Component {
  async componentDidMount() {
    const id = this.props.match.params.studentId;
    console.log('**STUDENT_ID_INSIDE_MOUNT: ', id);
    this.props.fetchInitialStudent(id);
  }

  render () {
    const student = this.props.student;
    console.log('***STUDENT: ', student, '***STUDENT.CAMPUS: ', student.campus);

      return (
        <div>
          <h2>{student.firstName} {student.lastName}</h2>
          <img src={student.imageUrl} id={`${student.id}Img`}></img>
            <body className='student details'>
              <p></p>
              <p>{student.email}</p>
              <p>{student.gpa}</p>
              {student.length > 0 &&
              <NavLink to={`/campuses/${student.campus.id}`} >{student.campus.name}</NavLink>
              }
            </body>
        </div>
      )
  }
}
const mapStateToProps = state => ({
  student: state.students.singleStudent
});

const mapDispatchToProps = dispatch => ({
  fetchInitialStudent: (id) => {
    console.log('**STUDENT_ID_INSIDE_MAPDISPATCH: ', id);
    dispatch(fetchStudent(id)) }});

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);
