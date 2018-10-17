import React from 'react'
import { connect } from 'react-redux'
import { updateStudent } from '../store'
import urlRegex from 'url-regex'
import validator from 'email-validator'

class UpdateStudent extends React.Component {

  constructor() {
    super();
    this.state = {
      chngKey: '',
      chngObj: {}
    }


    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateInput = this.validateInput.bind(this);
  }

  handleSelect(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleChange(e) {
    console.log('this.state BEFORE change:', this.state);
    const key = this.state.chngKey;
    this.setState({ chngObj: { [key]: e.target.value }});
    console.log('this.state AFTER change:', this.state)
  }

  handleSubmit(e) {
    e.preventDefault();
    const changes = this.state.chngObj
    const id = this.props.studentId
    this.props.sendChanges(id, changes)
    this.setState({});
    alert('Update Submitted!');
    this.props.removeForm();
  }

  validateInput(e) {
    e.preventDefault();
    const key = this.state.chngKey;
    const value = this.state.chngObj[key];
      if (key === 'imageUrl' && urlRegex({exact: true}).test(value) === false) {
        alert('must be a valid image URL')
      } else if (key === 'email' && validator.validate(value) === false) {
        alert('must be a valid email address')
      }
      else if (value === '' || value === null || value === undefined ) {
        alert('content required')
      } else {
        this.handleSubmit(e)
      }
  }

  render() {
    return (
      <form className='student-update-inline'>
        <label>Which would you like to change?</label>
        <p></p>
        <select name='chngKey' onClick={this.handleSelect}>
            <option></option>
            <option value='firstName'  >First Name</option>
            <option value='lastName'  >Last Name</option>
            <option value='imageUrl'  >Profile Picture</option>
            <option value='email'  >Email</option>
        </select>
              <p></p>
              <div>
                {
                this.state.chngKey &&
                <div>
                  <input
                  type='text'
                  name={this.state.chngObj}
                  className='student-form-control'
                  onChange={this.handleChange}
                  //value={''}
                  />
                  <button type='submit' onClick={this.validateInput}>Sumbit Change</button>
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>
                </div>
              }
              </div>
      </form>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  sendChanges: (id, changes) => { dispatch(updateStudent(id, changes)) },
})
export default connect(null, mapDispatchToProps)(UpdateStudent);

