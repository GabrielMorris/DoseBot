//Kat message
exports.run = (client, message, args) => {
  message.channel
    .send(
      'ALL HAIL KAT, <@371151824331210755>\nKAT APPRECIATION DAY\nKAT APPRECIATION DAY\nKAT APPRECIATION DAY\nKAT APPRECIATION DAY'
    )
    .catch(console.error);
};
