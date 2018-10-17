import React from 'react'
import { connect } from 'react-redux'
import { updateCampus } from '../store'
import urlRegex from 'url-regex'


class UpdateCampus extends React.Component {

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
    this.setState({ chngKey: e.target.value });
  }

  handleChange(e) {
    const key = this.state.chngKey;
    this.setState({ chngObj: { [key]: e.target.value }});
  }

  handleSubmit(e) {
    e.preventDefault();
    const changes = this.state.chngObj
    const id = this.props.campusId
    this.props.sendChanges(id, changes)
    this.setState({ chngObj: {}, chngKey: '' });
    alert('Update Submitted!');
    this.props.removeForm();
  }

  validateInput(e) {
    e.preventDefault();
    const key = this.state.chngKey || null;
    const value = this.state.chngObj[key] || null;
      if (key === 'imageUrl' && urlRegex({exact: true}).test(value) === false) {
        alert('must be a valid image URL')
      }
      else if (!value) {
        alert('content required');
      } else {
        this.handleSubmit(e)
      }
  }

  render() {
    return (
      <form className='campus-update-inline'>
        <label>Which would you like to change?</label>
        <p></p>
        <select name='chngKey' onClick={this.handleSelect}>
            <option></option>
            <option value='name'  >Name</option>
            <option value='imageUrl'  >Picture</option>
            <option value='address'  >Location</option>
            <option value='description'  >About</option>
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
  sendChanges: (id, changes) => { dispatch(updateCampus(id, changes)) },
})
export default connect(null, mapDispatchToProps)(UpdateCampus);
