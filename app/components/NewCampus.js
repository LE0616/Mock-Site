import React from 'react'
import { connect } from 'react-redux'
import { postCampus } from '../store'
import urlRegex from 'url-regex'

class NewCampus extends React.Component {
  constructor(){
    super();
    this.state = {
      name: '',
      imageUrl: null,
      address: '',
      description: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm =this.validateForm.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newCampus = this.state;
    console.log('NEWCAMPUS INSIDE SUBMIT HANDLER: ', newCampus)
    this.props.addNewCampusToServer(newCampus);
    this.setState({
      name: '',
      imageUrl: null,
      address: '',
      description: ''
    });
    alert('New Campus Submitted!');
  }

  validateForm(e) {
    e.preventDefault();
    if (this.state.name == '') {
      alert('> name required <')
    } else if (this.state.address == '') {
      alert('> address required <')
    } else if (this.state.imageUrl !== null && urlRegex({exact: true}).test(this.state.imageUrl) === false) {
      alert('> photo must be a valid imageUrl <')
    }
    else {
      this.handleSubmit(e)
    }
  }

  render() {
    return (
      <form className='campus-form-inline'>
        <label>Add new Campus:</label>
        <p></p>
        <p></p>
        Name: <input
          type='text'
          name='name'
          className='campus-form-control'
          onChange={this.handleChange}
          value={this.state.name}
           />
        Image URL: <input
          type='text'
          name='imageUrl'
          className='campus-form-control'
          onChange={this.handleChange}
          value={this.state.imageUrl}
          />
        Address: <input
          type='text'
          name='address'
          className='campus-form-control'
          onChange={this.handleChange}
          value={this.state.address}
          />
        Description: <input
          type='text'
          name='description'
          className='campus-form-control'
          onChange={this.handleChange}
          value={this.state.description}
          />
          <p></p>
          <p></p>
        <button type='submit' onClick={this.validateForm}>Submit</button>
      </form>
    );
  }
}


const mapDispatchToProps = dispatch => ({ addNewCampusToServer: (campus) => dispatch(postCampus(campus))})

export default connect(null, mapDispatchToProps)(NewCampus);
