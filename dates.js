let now = new Date();

console.log(printDate(now, "date day year monthName hours:minutes:seconds"));

// "2023 Feb 17"

function printDate(date, format) {
  let dateString = date.toDateString();

  let dayName = dateString.split(" ")[0];
  let MonthName = dateString.split(" ")[1];
  let dateNumber = dateString.split(" ")[2];
  let year = dateString.split(" ")[3];
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let value = format
    .replace("year", year)
    .replace("date", dateNumber)
    .replace("monthName", MonthName)
    .replace("day", dayName)
    .replace("hours", hours)
    .replace("minutes", minutes)
    .replace("seconds", seconds);

  return value;
}
