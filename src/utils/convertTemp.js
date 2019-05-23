const convertTemp = fDegrees => {
  return (((fDegrees - 273.15) * 9) / 5 + 32).toFixed(0);
};

export default convertTemp;
