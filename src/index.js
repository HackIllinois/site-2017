import React from 'react'
import ReactDom from 'react-dom'

import { Router, Route, Link, browserHistory } from 'react-router'

import App from './modules/app'
import Game from './modules/game'
import Landing from './modules/landing'

const root = document.getElementById("app")

ReactDom.render(
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<Route path='game' component={Game}/>
			<Route path='landing' component={Landing}/>
		</Route>
	</Router>
		, root)
