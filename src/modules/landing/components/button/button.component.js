import React from 'react'

import styles from './button.scss'

const Button = (props) => {
	if (props.register) {
		return (
			<a onClick={props.onClick} className={styles['register']} href={props.dest}>
				{props.arrow == 'left' ? <span className={styles['arrow-left']}></span> : null}
				{props.label}
				{props.arrow == 'right' ? <span className={styles['arrow-right']}></span> : null}
			</a>
		);
	}

	return (
		<a onClick={props.onClick} className={styles['button']} href={props.dest}>
			{props.arrow == 'left' ? <span className={styles['arrow-left']}></span> : null}
			{props.label}
			{props.arrow == 'right' ? <span className={styles['arrow-right']}></span> : null}
		</a>
	);
}


export default Button
