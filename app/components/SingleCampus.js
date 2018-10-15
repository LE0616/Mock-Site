import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCampus } from '../store'


class SingleCampus extends React.Component {

  async componentDidMount() {
    const id = this.props.match.params.campusId;
    console.log('**CAMPUS_ID_INSIDE_MOUNT: ', id);
    this.props.fetchInitialCampus(id);
  }

  render() {
    const campus = this.props.campus;
    console.log('***CAMPUS: ', campus, '***CAMPUS.STUDENTS: ', campus.students);

    return (
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
              campus.length > 0 &&
              campus.students.map(student => {
                return (
                  <li>
                    <NavLink key={student.id} to={`/students/${student.id}`}>{student.firstName} {student.lastName}</NavLink>
                  </li>
                )
              })
            }</ol>
          </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  campus: state.campuses.singleCampus
});

const mapDispatchToProps = dispatch => ({fetchInitialCampus: (id) => {
  console.log('**CAMPUS_ID_INSIDE_MAPDISPATCH: ', id);
  dispatch(fetchCampus(id)) }});

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
