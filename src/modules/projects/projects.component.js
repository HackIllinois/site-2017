import React, { Component } from 'react'
import axios from 'axios'

import styles from './projects.scss'
import Button from '../registration/components/button'

class Projects extends Component {
  render = () => (
        <div className={styles['artboard-container']}>
            <img
                className={styles['artboard']}
                src="src/assets/img/project_artboard.png"/>
        </div>
  )
}


export default Projects
