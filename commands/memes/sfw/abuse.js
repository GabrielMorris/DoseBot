// Cycle of abuse image
exports.run = (client, message, args) => {
  message.channel
    .send('https://en.wikipedia.org/wiki/Cycle_of_abuse')
    .catch(console.error);
};
