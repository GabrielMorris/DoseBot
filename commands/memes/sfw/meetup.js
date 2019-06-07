exports.run = (client, message, args) => {
  const timeOfMove = 'June 8 2019 12:45:00 GMT-0700';

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }
  const countdown = getTimeRemaining(timeOfMove);

  const channelMessage = `${countdown.days} days, ${countdown.hours} hours, ${
    countdown.minutes
  } minutes, ${
    countdown.seconds
  } seconds until THE GREAT SALT MEETUP OF OUR TIME!`;

  message.channel.send(channelMessage).catch(console.error);
};
