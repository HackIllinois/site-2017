import React from 'react'
import ReactDom from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import App from "./modules/app"

const root = document.getElementById("app")

ReactDom.render(<App/>, root)
