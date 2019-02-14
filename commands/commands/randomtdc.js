// Sends a random TDC video to the channel
exports.run = (client, message, args) => {
  message.channel
    .send(
      `<@${
        message.author.id
      }> - Enjoy a random episode of The Drug Classroom: <https://kek.gg/u/LP7h>`
    )
    .catch(console.error);
};
