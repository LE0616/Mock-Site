import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCampus } from '../store'
import UpdateCampus from './UpdateCampus'


class SingleCampus extends React.Component {

  constructor() {
    super()
    this.state = {
      viewForm: false
    }

    this.addForm = this.addForm.bind(this);
    this.removeForm = this.removeForm.bind(this);
  }

  async componentDidMount() {
    const id = this.props.match.params.campusId;
    this.props.fetchInitialCampus(id);
  }

  addForm() {
    this.setState({ viewForm: true })
  }

  removeForm() {
    this.setState({ viewForm: false })
  }

  render() {
    const campus = this.props.campus;

    return (
      !campus ?
      <div>
       <h3>Campus Not Found: Try again?</h3>
       <p></p>
       <img src='https://i.pinimg.com/originals/e7/37/e4/e737e462cd77f33c3109196e05bb0221.jpg'></img>
      </div>
      :

      <div>
        <h1>{campus.name}</h1>
          <div className='campus details'>
            <img src={campus.imageUrl} id={`${campus.name}Img`}></img>
            <p>{campus.address}</p>
            <p></p>
            <p>{campus.description}</p>
            <p></p>
            <h2>{`Students of ${campus.name}`}</h2>
            <ol>{
              campus.students &&
              campus.students.length > 0 ?
              campus.students.map(student => {
                return (
                  <li>
                    <NavLink key={student.id} to={`/students/${student.id}`}>{student.firstName} {student.lastName}</NavLink>
                  </li>
                )
              })  : ( <h3>This campus has no active students.</h3> )
            }</ol>
            </div>
            <p></p>
            <p></p>
            <div>
                <p></p>
                <p></p>
                <button type='button' onClick={this.addForm}>Edit Campus Profile</button>
                <p></p>
                {
                this.state.viewForm ?
                <UpdateCampus removeForm={this.removeForm} campusId={campus.id} />
                  : ''
                }
              </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  campus: state.campuses.singleCampus
});

const mapDispatchToProps = dispatch => ({
  fetchInitialCampus: (id) => { dispatch(fetchCampus(id)) }});

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
