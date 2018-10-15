import React from 'react'
import { connect } from 'react-redux'
import { postCampus } from '../store'


class NewCampus extends React.Component {
  constructor(){
    super();
    this.input = {
      name: '',
      address: '',
      imageUrl: null,
      description: null
    }
    this.handleChange.bind(this);
    this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit() {
    const newCampus = this.input;
    this.props.addNewCampusToServer(newCampus);
  }

  render() {
    return (
      <form className='form-inline'>
        <label>Add new Campus:</label>
        Name: <input
          type='text'
          name='name'
          className='form-control'
          onChange={this.handleChange}
           />
        Address: <input
          type='text'
          name='address'
          className='form-control'
          onChange={this.handleChange}
          />
        Image URL: <input
          type='text'
          name='imageUrl'
          placeholder='Enter an image Url of new campus' className='form-control'
          onChange={this.handleChange}
          />
        Description: <input
          type='text'
          name='description'
          className='form-control'
          onChange={this.handleChange}
          />
        <button type='submit' onSubmit={this.handleSubmit} value='Submit'>Submit</button>
      </form>
    );
  }
}


const mapDispatchToProps = dispatch => ({ addNewCampusToServer: (campus) => dispatch(postCampus(campus))})

export default connect(null, mapDispatchToProps)(NewCampus);
