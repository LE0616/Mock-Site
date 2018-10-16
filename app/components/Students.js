import React from 'react'
import { connect } from 'react-redux'
import { fetchStudents, deleteStudent } from '../store'
import { NavLink } from 'react-router-dom'


class Students extends React.Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount () {
    this.props.fetchInitialStudents()

  }
  handleClick(e) {
    const id = +e.target.value;
    const idArr = this.props.students.map(elem => elem.id);
    const index = idArr.indexOf(id);
    this.props.removeFormerStudent(id, index);
  }

  render () {
    const students = this.props.students;

     return (
       !students ?
       <div>
         <img src='https://i.gifer.com/AGNB.gif'></img>
       </div>
       :
      <div>
        <h3>STUDENTS</h3>
        <ul>
          {
            students.map(student => {
              return (
                <li key={student.id}>
                  <button value={student.id} className='remove/X button' onClick ={this.handleClick}>X</button>
                  <NavLink to={`/students/${student.id}`} >{student.firstName} {student.lastName}</NavLink>
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

const mapDispatchToProps = dispatch => ({
  fetchInitialStudents: () => { dispatch(fetchStudents()) },
  removeFormerStudent: (id, index) => { dispatch(deleteStudent(id, index))}
});

export default connect(mapStateToProps, mapDispatchToProps)(Students);
