import React from 'react'
import { connect } from 'react-redux'
import { fetchCampuses, deleteCampus } from '../store'
import { NavLink } from 'react-router-dom'

class Campuses extends React.Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    this.props.fetchInitialCampuses();
  }

  handleClick(e) {
    console.log('e.target.value as ID in ClickHandler: ', e.target.value)
    this.props.removeFormerCampus(e.target.value);
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
                  <p></p>
                    <button value={campus.id} className='remove/X button' onClick ={this.handleClick}>X</button>
                    <NavLink to={`/campuses/${campus.id}`}>{campus.name}</NavLink>
                    <p></p>
                    <img src={campus.imageUrl} id={`${campus.name}Img`}></img>

                </div>
              </li>
            )
          })
        }
      </ul>
      <NavLink to={'/campuses/add_campus'}>New Campus? Add it here.</NavLink>
    </div>
  )
  }
}

const mapStateToProps = state => ({
    campuses: state.campuses.allCampuses
});

const mapDispatchToProps = dispatch => ({
  fetchInitialCampuses: () => { dispatch(fetchCampuses()) },
  removeFormerCampus: (id) => { dispatch(deleteCampus(id))}
});

export default connect(mapStateToProps, mapDispatchToProps)(Campuses);
