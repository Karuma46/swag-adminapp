const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

// const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const padDate = num => {
  return `${num}`.padStart(2, 0);
};

const getDate = dateStr => {
  let date;
  let now = new Date();
  if (dateStr) {
    date = new Date(dateStr);
  } else {
    date = now;
  }

  if (date.getFullYear() === now.getFullYear()) {
    if (date.getDate() === now.getDate()) {
      return padDate(date.getHours()) + ':' + padDate(date.getMinutes());
    } else {
      return padDate(date.getDate()) + ' ' + months[date.getMonth()];
    }
  } else {
    return (
      padDate(date.getDate()) +
      '/' +
      padDate(date.getMonth() + 1) +
      '/' +
      date.getFullYear()
    );
  }
};

export default getDate;
