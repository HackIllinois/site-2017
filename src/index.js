import React from 'react'
import ReactDom from 'react-dom'

import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import App from './modules/app'
import Game from './modules/game'
import Landing from './modules/landing'
import OpenSource from './modules/opensource'
import Sponsor from './modules/sponsor'

const root = document.getElementById("app")

ReactDom.render(
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Landing}/>
			<Route path='game' component={Game}/>
			<Route path='opensource' component={OpenSource}/>
			<Route path='sponsor' component={Sponsor}/>
		</Route>
	</Router>
		, root)
