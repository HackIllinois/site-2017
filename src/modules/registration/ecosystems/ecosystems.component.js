import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import boron from 'boron'

import styles from './ecosystems.scss'
import buttonStyles from '../components/button/button.scss'
import userInfoStyles from '../userinfo/userinfo.scss'
import Button from '../components/button'
import Input from '../components/input'

var Modal = require('boron/DropModal')

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

const modalStyle = {
	width: '50%',
	height: '475px',
	backgroundColor: '#122342',
	border: '5px solid #57C7DF',
	padding: '45px'
};

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

	showModal = () => {
		if(!this.props.active) this.refs.modal.show();
		this.toggleSelect();
	}

	hideModal = () => {
    this.refs.modal.hide();
  }

	render = () => (
		<div>
			<div onClick={this.props.label == 'create' ? this.showModal : this.toggleSelect} id={styles[this.props.label]} className={[styles['project-card'],this.props.active ? styles['card-active'] : '', this.props.store.selectedEcosystems >= 4 && !this.props.active ? styles['max-selected'] : ''].join(' ')}>
			  <img draggable="false" src={"../../../src/assets/img/card-" + this.props.index + '.svg'}/>
			  <span className={styles.label}>{this.props.label.toUpperCase()}</span>
	    </div>
	    {this.props.label == 'create'?
		    <Modal ref="modal" modalStyle={modalStyle}>
		    	<div className={styles['modal-text']}>+ CREATE</div>
					<Input type={'project'} key={'name'} id={'name'} options={[]} />
					<Input type={'project'} key={'description'} id={'description'} options={[]} />
					<Input type={'project'} key={'repo'} id={'repo'} options={[]} />
		     	<Button dest='#' onClick={this.hideModal} arrow='right' label='SAVE'/>
		    </Modal>
		    :
		    null
	  	}
  	</div>
	)
}

@inject('store') @observer
class Ecosystems extends Component {

	saveEcosystems = () => {
		let ecosystems = []
		if(this.props.store.ecosystems.javascript) ecosystems.push({'ecosystemId': 1})
		if(this.props.store.ecosystems.ios) ecosystems.push({'ecosystemId': 2})
		if(this.props.store.ecosystems.android) ecosystems.push({'ecosystemId': 3})
		if(this.props.store.ecosystems.ruby) ecosystems.push({'ecosystemId': 4})
		if(this.props.store.ecosystems.python) ecosystems.push({'ecosystemId': 5})
		if(this.props.store.ecosystems.embedded) ecosystems.push({'ecosystemId': 6})
		if(this.props.store.ecosystems.linux) ecosystems.push({'ecosystemId': 7})
		
		let project = {
			'name': this.props.store.project.name,
			 'description': this.props.store.project.description,
			 'repo': this.props.store.project.repo,
			 'isSuggestion': false
		}

		let projects = []

		if(this.props.store.ecosystems.create) projects.push({
			'name': this.props.store.project.name,
			 'description': this.props.store.project.description,
			 'repo': this.props.store.project.repo,
			 'isSuggestion': false
		});

		if(ecosystems.length > 0) {
			//store for later
			localStorage.setItem("ecosystemInterests", JSON.stringify(ecosystems))
			localStorage.setItem("projects", JSON.stringify(projects))
			window.location = '/registration/4'
		}
		
	}

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
		    	<Button onClick={this.saveEcosystems} dest='#' arrow='right' label='CONTINUE'/>
		    </div>
		   </div>
		</div>
	)
}

export default Ecosystems
