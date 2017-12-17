import { h, Component } from 'preact';
import { dateMinus } from 'date-minus';
import style from './style';

class Timer extends Component {
  state = {
    log: [],
    dist: {},
    timer: null
  }

  computeDist() {
    const { baseTime } = this.props;
    var dist = dateMinus(baseTime);
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
			<div class={ style.timer }>
        <span>{ dist.years }</span> 年 <span>{ dist.months }</span> 月 <span>{ dist.days }</span> 日 
        <span>{ dist.hours }</span> 时 <span>{ dist.minutes }</span> 分 <span>{ dist.seconds} </span> 秒
			</div>
		);
	}
}

Timer.defaultProps = {
  // 初始化时间
  baseTime: new Date('2015-9-19 22:10:00').valueOf()
};

export default Timer;
