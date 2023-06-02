function timeConversion(time) {
  let [hours, minutes, seconds, period] = time.split(/:|(?<=..)(?=[AP]M$)/);

  if (period === "PM" && hours !== "12") {
    hours = (parseInt(hours) + 12).toString();
  } else if (period === "AM" && hours === "12") {
    hours = "00";
  }
  return `${hours}:${minutes}:${seconds}`;
}

console.log(timeConversion("01:05:45PM")); //19:05:45
