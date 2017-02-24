import React, { Component } from 'react'
import axios from 'axios'

import styles from './prize-panel.scss'

class Microsoft extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showData: false
        };
        this.display = this.display.bind(this);
    }

    display = () => {
        this.setState({showData: !this.state.showData});
    };

    render = () => (

        <div className={styles['prizes-body-panel']}>
            <div id={styles.header2} onClick={this.display} className={styles['prizes-body-panel-header-1']}>
                <h4 className={styles['prizes-body-panel-title']}>The Missing Piece</h4>
                <img className={styles['prizes-body-caret']} src="src/assets/img/down-arrow.svg"/>
            </div>

            { this.state.showData ? <div id="content-1" className={styles['prizes-body-panel-content']}>
                <br />
                <h5 className={styles['prizes-body-panel-content-subtitle']}>
                    This category is for open source projects that fill a gap in an existing technology or tool.
                    An example of a project in this category is stdx, a library that provides the missing batteries
                    of Rust. When life serves you puzzles, you'll create The Missing Piece.
                    This prize celebrates open source projects that extend or are built with Microsoft technology.
                    Some Microsoft technologies include, Azure, HoloLens, and Cognitive Services.<br /><br />
                </h5>
                <h4>Presented by <a href="https://www.microsoft.com/en-us/">Microsoft</a>.</h4>
                
                <br />
            </div> : null }
        </div>

    )
}

export default Microsoft