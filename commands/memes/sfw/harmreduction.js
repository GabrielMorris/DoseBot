// harm reduction message
exports.run = (client, message, args) => {
  message.channel
    .send(
      'Are you practicing H A R M  R E D U C T I O N???\n\nhttps://i.imgur.com/nIpaz1y.png'
    )
    .catch(console.error);
};
