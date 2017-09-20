import { h, Component } from 'preact';
import anime from '../../utils/animate';
import style from './style';

class Heart extends Component {
	render() {
    const { dist } = this.state;
		return (
			<div class={ style.heart }></div>
		);
	}
}

export default Heart;
