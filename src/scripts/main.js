AOS.init();

const eventDate = new Date("Dec 12, 2023 19:00:00");
const timeStampEvent = eventDate.getTime();

const hourCount = setInterval(function () {
  const now = new Date();
  const timeStampActual = now.getTime();

  const untilEventDistance = timeStampEvent - timeStampActual;

  const daysInMs = 1000 * 60 * 60 * 24;
  const hoursInMs = 1000 * 60 * 60;
  const minutesInMs = 1000 * 60;
  const secondsInMs = 1000;

  const daysUntilEvent = Math.floor(untilEventDistance / daysInMs);
  const hoursUntilEvent = Math.floor(
    (untilEventDistance % daysInMs) / hoursInMs
  );
  const minutesUntilEvent = Math.floor(
    (untilEventDistance % hoursInMs) / minutesInMs
  );
  const secondsUntilEvent = Math.floor(
    (untilEventDistance % minutesInMs) / secondsInMs
  );

  document.getElementById(
    "count"
  ).innerHTML = `começa em ${daysUntilEvent}d  ${hoursUntilEvent}h  ${minutesUntilEvent}m  ${secondsUntilEvent}s`;
  if (untilEventDistance < 0) {
    document.getElementById("count").innerHTML = "já aconteceu!";
  }
}, 1000);
