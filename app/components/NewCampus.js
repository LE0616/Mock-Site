import React from 'react'
import { connect } from 'react-redux'
import { postCampus } from '../store'


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
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newCampus = this.state;
    console.log('NEWCAMPUS INSIDE SUBMIT HANDLER: ', newCampus)
    this.props.addNewCampusToServer(newCampus);
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
          //value={this.state.firstName}
           />
        Image URL: <input
          type='text'
          name='imageUrl'
          className='campus-form-control'
          onChange={this.handleChange}
          />
        Address: <input
          type='text'
          name='address'
          className='campus-form-control'
          onChange={this.handleChange}
          />
        Description: <input
          type='text'
          name='description'
          className='campus-form-control'
          onChange={this.handleChange}
          />
          <p></p>
          <p></p>
        <button type='submit' onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}


const mapDispatchToProps = dispatch => ({ addNewCampusToServer: (campus) => dispatch(postCampus(campus))})

export default connect(null, mapDispatchToProps)(NewCampus);
