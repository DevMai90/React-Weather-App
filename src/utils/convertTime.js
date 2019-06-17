// Convert response time to local format.
const convertTime = time => {
  let currentTime = new Date(`${time} UTC`);
  let localTime;
  if (currentTime.getHours() <= 12)
    localTime = `${currentTime.getHours()}:${addZero(
      currentTime.getMinutes()
    )}AM`;
  else
    localTime = `${currentTime.getHours() - 12}:${addZero(
      currentTime.getMinutes()
    )}PM`;

  return localTime;
};

const addZero = n => (parseInt(n, 10) < 10 ? '0' : '') + n;

export default convertTime;
