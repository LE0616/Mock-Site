import React from 'react'
import { connect } from 'react-redux'
import { postStudent } from '../store'


class NewStudent extends React.Component {
  constructor(){
    super();
    this.input = {
      name: '',
      address: '',
      imageUrl: null,
      email: '',
    }
    this.handleChange.bind(this);
    this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit() {
    const newStudent = this.input;
    this.props.addNewStudentToServer(newStudent);
  }

  render() {
    return (
      <form className='form-inline'>
        <label>Add new Student:</label>
        First Name: <input
          type='text'
          name='firstName'
          className='form-control'
          onChange={this.handleChange}
           />
        Last Name: <input
          type='text'
          name='lastName'
          className='form-control'
          onChange={this.handleChange}
          />
        Image URL: <input
          type='text'
          name='imageUrl'
          placeholder='Enter an image Url of YOU!' className='form-control'
          onChange={this.handleChange}
          />
        Email: <input
          type='text'
          name='email'
          className='form-control'
          onChange={this.handleChange}
          />
        <button type='submit' onSubmit={this.handleSubmit} value='Submit'>Submit</button>
      </form>
    );
  }
}


const mapDispatchToProps = dispatch => ({ addNewStudentToServer: (student) => dispatch(postStudent(student))})

export default connect(null, mapDispatchToProps)(NewStudent);
