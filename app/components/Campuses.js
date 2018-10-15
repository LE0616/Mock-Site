import React from 'react'
import { connect } from 'react-redux'
import { fetchCampuses } from '../store'
import { NavLink } from 'react-router-dom'

class Campuses extends React.Component {

  async componentDidMount() {
    this.props.fetchInitialCampuses();
  }

  render () {
    console.log(this.props.campuses)
    const campuses = this.props.campuses;

  return (
    <div>
      <h3>CAMPUSES</h3>
      <ul>
        {
          campuses.map(campus => {
            return (
              <li key={campus.id}>
                <div>
                  <img src={campus.imageUrl} id={`${campus.name}Img`}></img>
                  <p></p>
                  <NavLink to={`/campuses/${campus.id}`}>{campus.name}</NavLink>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
  }
}

const mapStateToProps = state => ({
    campuses: state.campuses.allCampuses
});

const mapDispatchToProps = dispatch => ({fetchInitialCampuses: () => {
  dispatch(fetchCampuses()) }});

export default connect(mapStateToProps, mapDispatchToProps)(Campuses);
