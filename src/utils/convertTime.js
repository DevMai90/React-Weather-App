// Convert response time to local format.
const convertTime = time => {
  let milTime = new Date(`${time} UTC`).getHours();
  let localTime;
  if (milTime <= 12) localTime = `${milTime}:00AM`;
  else localTime = `${milTime - 12}:00PM`;

  return localTime;
};

export default convertTime;
