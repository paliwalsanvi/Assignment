import React from 'react';

class Button extends React.Component {
	render() {
		return (
			<button onClick={this.props.handleClick}
				className={ this.props.light ? 'light-button' : 'dark-button' }>
				Refresh
			</button>
		);
	}
}
export default Button;