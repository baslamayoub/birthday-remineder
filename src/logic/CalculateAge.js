const CalculateAge = (birthdate) => {
  const birthDate = new Date(birthdate);

  const currentDate = new Date();
  const deferenceInMillisecond = currentDate - birthDate;

  const ageDate = new Date(deferenceInMillisecond);
  const year = ageDate.getUTCFullYear() - 1970;
  const month = ageDate.getUTCMonth();
  const days = ageDate.getUTCDate() - 1;

  return { year, month, days };
};

export default CalculateAge;
