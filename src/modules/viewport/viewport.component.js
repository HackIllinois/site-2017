import React, {Component} from 'react'
import Gameworld from '../gameworld'

import styles from './viewport.styl'

class Viewport extends Component {
	render = () => (
		<div id={styles.viewport}> <Gameworld/> </div>
	)
}

export default Viewport
