import './App.css'
import React from 'react'

import PrivateRoute from './components/PrivateRouter'
import {Route} from 'react-router-dom';
import Guides from './components/guides';
import Onboarding from './components/OnBoard';

class App extends React.Component {
	render() {
		return (
			<div className="container">
			<header className="App-header">
          <h1 className="App-title">How To ...</h1>  
        </header>
				<PrivateRoute exact path="/" component={Guides} />
				<Route exact path="/login" component={Onboarding} />
			</div>
		)
	}
}

export default App
