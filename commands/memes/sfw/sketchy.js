// Sketchy message
exports.run = (client, message, args) => {
  message.channel
    .send(
      '<@393105172617887747> He who fights with monsters should look to it that he himself does not become a monster.And if you gaze long into an abyss, the abyss also gazes into you.'
    )
    .catch(console.error);
};
