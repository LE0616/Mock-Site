import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Campuses from './Campuses'
import Students from './Students'
import Navbar from './Navbar'
import SingleCampus from './SingleCampus'
import SingleStudent from './SingleStudent'


const Root = () => {
  return (

      <div>
          <Navbar />

        <main>
          <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
          <p>This seems like a nice place to get started with some Routes!</p>
          <Switch>
            <Route exact path={'/campuses'} render={(routeProps) => <Campuses {...routeProps} />} />
            <Route exact path={'/students'} render={(routeProps) => <Students {...routeProps} />} />
            <Route exact path={'/'} render={(routeProps) => <Campuses {...routeProps} />} />
            <Route exact path={'/campuses/:campusId'} render={(routeProps) => <SingleCampus {...routeProps} />} />
            <Route exact path={'/students/:studentId'} render={(routeProps) => <SingleStudent {...routeProps} />} />
          </Switch>

        </main>
      </div>

  )
}

export default Root
