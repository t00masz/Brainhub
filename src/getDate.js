function getDate() {

  let fullDate = new Date();
  let year = fullDate.getFullYear();
  let month = fullDate.getMonth() + 1;
  let day = fullDate.getDate();  
  if (month < 10) {
    month = '0' + month;
  };
  if (day < 10) {
    day = '0' + day;
  };
  return (
    year + '-' + month + '-' + day
  )
}

export default getDate;

