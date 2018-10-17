import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchStudent } from '../store'


class SingleStudent extends React.Component {
  async componentDidMount() {
    const id = this.props.match.params.studentId;
    this.props.fetchInitialStudent(id);
  }

  render () {
    const student = this.props.student;

      return (
          !student ?
          <div>
           <h3>Student Not Found: Try again?</h3>
           <p></p>
           <img src='https://i.pinimg.com/originals/e7/37/e4/e737e462cd77f33c3109196e05bb0221.jpg'></img>
          </div>
          :
            <div>
              <h2>{student.firstName} {student.lastName}</h2>
              <img src={student.imageUrl} id={`${student.id}Img`}></img>
                <div className='student details'>
                  <p></p>
                  <p>{student.email}</p>
                  <p>{student.gpa}</p>
                  {
                  student.campus ?
                  <NavLink to={`/campuses/${student.campus.id}`} >{student.campus.name}</NavLink>
                  : ( <p>This student is not enrolled.</p> )
                  }
                </div>
                <p></p>
                <p></p>
                <NavLink studentId={student.id} to='/students/update_student'>Edit Student Profile</NavLink>
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
