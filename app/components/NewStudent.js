import React from 'react'
import { connect } from 'react-redux'
import { postStudent } from '../store'


class NewStudent extends React.Component {
  constructor(){
    super();
    this.state = {
      firstName: '',
      lastName: '',
      imageUrl: '',
      email: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newStudent = this.state;
    this.props.addNewStudentToServer(newStudent);
    // this.setState({
    //   firstName: '',
    //   lastName: '',
    //   imageUrl: '',
    //   email: '',
    // });
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
          //value={this.state.firstName}
           />
        Last Name: <input
          type='text'
          name='lastName'
          className='student-form-control'
          onChange={this.handleChange}
          //value={this.state.lastName}
          />
        Image URL: <input
          type='text'
          name='imageUrl'
          className='student-form-control'
          onChange={this.handleChange}
          //value={this.state.imageUrl}
          />
        Email: <input
          type='text'
          name='email'
          className='student-form-control'
          onChange={this.handleChange}
          //value={this.state.email}
          />
          <p></p>
          <p></p>
        <button type='submit' onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}


const mapDispatchToProps = dispatch => ({ addNewStudentToServer: (student) => dispatch(postStudent(student))})

export default connect(null, mapDispatchToProps)(NewStudent);
