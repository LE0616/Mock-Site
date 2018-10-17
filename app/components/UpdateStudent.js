import React from 'react'
import { connect } from 'react-redux'
import { updateStudent } from '../store'

class UpdateStudent extends React.Component {

  constructor() {
    super();
    this.state = {}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const changes = this.state
    const id = this.props.studentId
    this.props.sendChanges(id, changes)
    this.setState({});
    alert('New Student Submitted!');
  }

  validateForm(e) {
    e.preventDefault();
    if (e.target.value == '') {
      alert('content required')
    } else {
      this.handleSubmit(e)
    }
  }

  render() {
    return (
      <form className='student-update-inline'>
        <label>Update Student:</label>
        <p></p>
        <p></p>
        First Name: <input
          type='text'
          name='firstName'
          className='student-form-control'
          onChange={this.handleChange}
          value={this.state.firstName}
          />

      </form>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  sendChanges: (id, changes) => { dispatch(updateStudent(id, changes)) },
})
export default connect(null, mapDispatchToProps)(UpdateStudent);

