import Landing from "views/examples/Landing";
import Login from "views/examples/Login";
import Dashboard from "views/examples/Dashboard";
import Signup from "views/examples/Signup";
import  EmailSent from "views/examples/EmailSent";
// React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// auth & redux
import AuthRoute from "components/AuthRoute";
import BasicRoute from "components/BasicRoute";
import { connect } from "react-redux";

// styled component


// Loader css


function App({ checked }) {
  return (
    <Router>
      {checked && (
        
          <Switch>
            
            <BasicRoute path="/emailsent/:userEmail">
              <EmailSent />
            </BasicRoute>
            <BasicRoute path="/signup">
              <Signup />
            </BasicRoute>
            <BasicRoute path="/login/:userEmail?">
              <Login />
            </BasicRoute>
            
            <AuthRoute path="/dashboard">
              <Dashboard />
            </AuthRoute>
            
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
      )}
    </Router>
  );
}

const mapStateToProps = ({ session }) => ({
  checked: session.checked,
  authenticated: session.authenticated,
});

export default connect(mapStateToProps)(App);
