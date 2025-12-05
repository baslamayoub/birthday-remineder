const RemainingTime = (dates) => {
  const birthday = new Date(dates);
  console.log(dates + "aaaa");
  const dateNow = new Date();
  const currentYear = dateNow.getFullYear();
  birthday.setFullYear(currentYear);

  if (birthday < dateNow) {
    birthday.setFullYear(currentYear + 1);
  }
  const TimeDeference = birthday - dateNow;

  const days = Math.floor(TimeDeference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (TimeDeference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((TimeDeference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((TimeDeference % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
    
  };
};

export default RemainingTime;
