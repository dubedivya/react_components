const getCurrentDate = () => {
  const currentDate = new Date();
  return currentDate.toLocaleString("en-us", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

export default getCurrentDate;
