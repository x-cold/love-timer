import { h, Component } from 'preact';
import { timeMinus } from '../../utils/time';
import style from './style';

class Timer extends Component {
  state = {
    log: [],
    dist: {},
    timer: null
  }

  computeDist() {
    const { baseTime } = this.props;
    var dist = timeMinus(baseTime);
    this.setState({
      dist
    });
  }

  computeRun() {
    this.computeDist();
    setTimeout(this.computeRun.bind(this), 1000);
  }

  clearTimer() {
    this.setState({
      timer: null
    });
  }

  componentWillMount() {
    this.clearTimer();
    this.computeRun();
  }

  componentWillUnmount() {
    this.clearTimer();
  }

	render() {
    const { dist } = this.state;
		return (
			<div className="timer">
				{dist.years} 年 {dist.months} 月 {dist.days} 日 {dist.hours} 时 {dist.minutes} 分 {dist.seconds} 秒
			</div>
		);
	}
}

Timer.defaultProps = {
  // 颜色渐变列表
  baseTime: new Date('2015-9-19 22:00:00').valueOf()
};
export default Timer;
