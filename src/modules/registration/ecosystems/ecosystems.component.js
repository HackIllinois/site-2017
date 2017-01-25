import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'

import styles from './ecosystems.scss'
import Button from '../components/button'

const ecosystems = [
	'javascript',
	'ios',
	'android',
	'ruby',
	'python',
	'embedded',
	'linux',
	'create'
]

@inject('store') @observer
class Card extends Component {
	
	toggleSelect = () => {
		if(this.props.store.selectedEcosystems >= 4 && !this.props.active) return;
		if(this.props.store.selectedEcosystems < 4 && !this.props.active){
			this.props.store.ecosystems[this.props.label] = !this.props.active;
			this.props.store.selectedEcosystems++;
		}
		else{
			this.props.store.ecosystems[this.props.label] = !this.props.active;
			this.props.store.selectedEcosystems--;
		}
	}

	render = () => (
		<div onClick={this.toggleSelect} id={styles[this.props.label]} className={[styles['project-card'],this.props.active ? styles['card-active'] : '', this.props.store.selectedEcosystems >= 4 && !this.props.active ? styles['max-selected'] : ''].join(' ')}>
    <img draggable="false" src={"../../../src/assets/img/card-" + this.props.index + '.svg'}/>
    <span className={styles.label}>{this.props.label.toUpperCase()}</span>
    </div>
	)
}

@inject('store') @observer
class Ecosystems extends Component {
	
	render = () => (
		<div> 
			<div className={styles['title-text']}> ECOSYSTEMS </div>
			<div className={styles['instruction-text']}> Pick ecosystems you think you can contribute to and/or propose a new project you'd like to build. You may pick up to 4. </div>
			<div className={styles['project-card-container']}>
        {ecosystems.map((ecosystem, index)=> (
        	<Card index={index} key={index} label={ecosystem} active={this.props.store.ecosystems[ecosystem]}/>
        ))}
	    </div>
	    <div className={styles['navigation-container']}>
		    <div className={styles['back-button']}>
		    	<Button dest='/registration/2' arrow='left' label='BACK'/>
		    </div>
		    <div className={styles['continue-button']}>
		    	<Button dest='/registration/4' arrow='right' label='CONTINUE'/>
		    </div>
		   </div> 
		</div>
	)
}

export default Ecosystems