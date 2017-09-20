import { h, Component } from 'preact';
import anime from '../../utils/animate';
import style from './style';
console.log(style)

class Heart extends Component {
	render() {
    const { dist } = this.state;
		return (
			<div className="heart heartbeat"></div>
		);
	}
}

export default Heart;
