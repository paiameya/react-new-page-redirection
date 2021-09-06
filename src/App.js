import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MyPages from "./Page";
import Users from "./MyPages";
import {connect} from 'react-redux';
import updatePagesList from './store/updatePagesList';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/page">MyPages</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/page">
            <MyPages />
          </Route>
          <Route path="/mypages/preview/:id">
            <Users />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const MapStateToProps = (state) => {
    return {
    pages: state.pages
};
};
const MapDispatchToProps = (dispatch) => {
return {
  updatePagesList: ()=> dispatch(updatePagesList)
}
};
export default connect(MapStateToProps, MapDispatchToProps)(App);




