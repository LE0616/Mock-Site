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
    const id = +e.target.value;
    const idArr = this.props.campuses.map(elem => elem.id)
    const index = idArr.indexOf(id);
    this.props.removeFormerCampus(id, index);
  }

  render () {
    const campuses = this.props.campuses;

  return (
    !campuses ?
    <div>
      <img src='https://i.gifer.com/AGNB.gif'></img>
    </div>
    :
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
  removeFormerCampus: (id, index) => { dispatch(deleteCampus(id, index))}
});

export default connect(mapStateToProps, mapDispatchToProps)(Campuses);
