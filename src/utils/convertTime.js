// Convert response time to local format.
const convertTime = time => {
  let currentTime;
  let localTime;

  // Create date object if we're not relying on response date
  if (time === undefined) currentTime = new Date();
  else currentTime = new Date(`${time} UTC`);

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
