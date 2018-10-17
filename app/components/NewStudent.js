import React from 'react'
import { connect } from 'react-redux'
import { postStudent, fetchCampuses } from '../store'
import urlRegex from 'url-regex'
import validator from 'email-validator'


class NewStudent extends React.Component {
  constructor(){
    super();
    this.state = {
      campusId: null,
      firstName: '',
      lastName: '',
      imageUrl: null,
      email: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm =this.validateForm.bind(this);
  }

  async componentDidMount() {
    this.props.fetchInitialCampuses();
  }

  handleChange(e) {
    console.log('onChange:', {[e.target.name]: e.target.value})
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newStudent = this.state;
    this.props.addNewStudentToServer(newStudent);
    this.setState({
      campusId: null,
      firstName: '',
      lastName: '',
      imageUrl: null,
      email: '',
    })
    alert('New Student Submitted!');
  }

  validateForm(e) {
    e.preventDefault();
    if (this.state.firstName == '') {
      alert('> first name required <')
    } else if (this.state.lastName == '') {
      alert('> last name required <')
    } else if (this.state.imageUrl !== null && urlRegex({exact: true}).test(this.state.imageUrl) === false) {
      alert('> photo must be a valid imageUrl <')
    } else if (validator.validate(this.state.email) === false) {
      alert('> email is required and must be a valid email address <')
    } else {
      this.handleSubmit(e)
    }
  }

  render() {
    return (
      <form className='student-form-inline'>
        <label>Add new Student:</label>
        <p></p>
        <p></p>
        First Name: <input
          type='text'
          name='firstName'
          className='student-form-control'
          onChange={this.handleChange}
          value={this.state.firstName}
           />
        Last Name: <input
          type='text'
          name='lastName'
          className='student-form-control'
          onChange={this.handleChange}
          value={this.state.lastName}
          />
        Image URL: <input
          type='text'
          name='imageUrl'
          className='student-form-control'
          onChange={this.handleChange}
          value={this.state.imageUrl}
          />
        Email: <input
          type='text'
          name='email'
          className='student-form-control'
          onChange={this.handleChange}
          value={this.state.email}
          />
        Campus: <select name='campusId' onClick={this.handleChange}>
          <option name='campusId'value='null'>   </option>
          {
            this.props.campuses.map(campus => {
              return (
                <option
                key={campus.id}
                name='campusId'
                value={campus.id}>{campus.name}</option>
              )
            })
          }
          </select>
          <p></p>
          <p></p>
        <button type='submit' onClick={this.validateForm}>Submit</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  campuses: state.campuses.allCampuses
});

const mapDispatchToProps = dispatch => ({
  fetchInitialCampuses: () => { dispatch(fetchCampuses()) },
  addNewStudentToServer: (student) => dispatch(postStudent(student))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewStudent);
