import React, { Component } from 'react'
import { Router, Route,Switch} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import Example from './components/Example'
import Home from './components/home/home'
import Home1 from './components/home/home1'
// import browserHistory from 'react-router-dom/lib/browserHistory';

class Routes extends Component {
    
    render(){
        const history = createBrowserHistory()
        const NoMatch = ({ location }) => (
            <div>
                <h3>No match for <code>{location.pathname}</code></h3>
            </div>
        )
        return  (
            
                <Router history={history}>
                    <Switch>
                    <Route exact path="/" component={Example}/>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/home1" component={Home1}/>
                    <Route path="*" component={NoMatch} />
                    </Switch>
                </Router>
        
        )
    }
}
export default Routes
