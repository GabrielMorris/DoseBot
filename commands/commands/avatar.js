// Avatar message
exports.run = (client, message, args) => {
  const Discord = require('discord.js');

  let avatar = message.author.avatarURL;

  if (message.mentions) {
    message.mentions.users.forEach(function(user) {
      avatar = user.avatarURL;
    });
  }

  const embed = new Discord.RichEmbed()
    .setTitle('DoseBot Avatar Service')
    .setAuthor('DoseBot', 'https://i.imgur.com/7R8WDwE.png')
    .setColor('747474')
    .setURL('http://www.dosebot.org')
    .setImage(avatar);

  message.channel.send({ embed });
};
