function getDaysInMonth(month) {
	var data = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	return data[month];
}

/**
 * 时间减法，参考借位减法
 * 
 * @param {Date|Number} date 被减数
 * @param {Date|Number} date 减数
 * 
 * @return {Object} date 时间差
 * @return {Number} date.passed 是否为过去时间
 * @return {Number} date.date 被减数
 * @return {Number} date.current 减数
 * @return {Number} date.years 年
 * @return {Number} date.months 月
 * @return {Number} date.days 日
 * @return {Number} date.hours 
 * @return {Number} date.minutes 分
 * @return {Number} date.seconds 秒
 */
function dateMinus(date, current) {
  if (typeof current !== 'object') {
    current = current ? new Date(current) : new Date();
  }
  if (typeof date !== 'object') {
    date = date ? new Date(date) : new Date();
  }

  // 传入的时间是过去
  var passed = true;
  if (date.valueOf() > current.valueOf()) {
    var tmpDate = date;
    date = current;
    current = tmpDate;
    passed = false;
  }

	var years = 0;
	var months = 0;
	var days = 0;
	var hours = 0;
	var minutes = 0;
  var seconds = 0;

	seconds = current.getSeconds() - date.getSeconds();
	if (seconds < 0) {
		seconds += 60;
		current.setMinutes(current.getMinutes() - 1);
  }
  
	minutes = current.getMinutes() - date.getMinutes();
	if (minutes < 0) {
		minutes += 60;
		current.setHours(current.getHours() - 1);
  }
  
	hours = current.getHours() - date.getHours();
	if (hours < 0) {
		hours += 24;
		current.setDate(current.getDate() - 1);
  }
  
  days = current.getDate() - date.getDate();
  if (days < 0) {
    days += getDaysInMonth(current.getMonth());
    current.setMonth(current.getMonth() - 1);
  }

  months = current.getMonth() - date.getMonth();
  if (months < 0) {
    months += 12;
    current.setYear(current.getFullYear() - 1);
  }

  years = current.getFullYear() - date.getFullYear();

	if (hours < 10) {
		hours = '0' + hours;
	}
	if (minutes < 10) {
		minutes = '0' + minutes;
	}
	if (seconds < 10) {
		seconds = '0' + seconds;
	}

  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
    passed,
    date,
    current
  }
}

exports.dateMinus = dateMinus;
