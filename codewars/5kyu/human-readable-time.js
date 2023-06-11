function humanReadable (seconds) {
  let times = [];
  times.push(Math.floor(seconds / 3600), Math.floor(seconds / 60) % 60, seconds % 60);
  return times.map(time => time < 10 ? `0${time}` : `${time}`)
  .join(':');
}