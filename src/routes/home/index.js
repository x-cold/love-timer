import { h, Component } from 'preact';

import Timer from '../../components/timer';
import Particule from '../../components/particule';
import Heart from '../../components/heart';

export default class Home extends Component {
	render() {
		return (
			<div className="container">
				{/* <Particule></Particule> */}
				<div className="content">
					<Heart></Heart>
					<Timer></Timer>
					<div className="copyright">冷哥哥 & 王弯弯 <span className="desc"> 长跑，一直保持心跳……</span></div>
				</div>
			</div>
		);
	}
}
