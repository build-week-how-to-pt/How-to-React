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
				<PrivateRoute exact path="/" component={Guides} />
				<Route exact path="/login" component={Onboarding} />
			</div>
		)
	}
}

export default App
