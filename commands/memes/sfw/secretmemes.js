// Displays list of memes
exports.run = (client, message, args) => {
  const Discord = require('discord.js');

  const SFW_MEMES_ARR = [
    '--cocoa',
    '--communism',
    '--donot',
    '--dust',
    '--etizolab',
    '--evebnire',
    '--frogmodai',
    '--sketchy',
    '--greentea',
    '--harmreduction',
    '--heart',
    '--kat',
    '--kat2',
    '--katcase',
    '--luxury',
    '--mascot',
    '--secretmemes',
    '--shay',
    '--sponge',
    '--triptoy',
    '--uwotm8',
    '--video',
    '--wisewords',
    '--zen',
    '--confuse',
    '--slcmove',
    '--banana',
    '--kat4'
  ];
  const NSFW_MEMES_ARR = ['--dong', '--rob'];

  const embed = new Discord.RichEmbed()
    .setTitle('DoseBot Memes')
    .setAuthor('DoseBot', 'https://i.imgur.com/7R8WDwE.png')
    .setColor('747474')
    .setFooter(
      'Please use drugs responsibly',
      'https://i.imgur.com/7R8WDwE.png'
    )
    .setThumbnail('https://i.imgur.com/7R8WDwE.png')
    .setTimestamp()
    .setURL('http://www.dosebot.org')
    .addField('SFW Memes', generateSFWMemes(SFW_MEMES_ARR))
    .addField('NSFW Memes', generateNSFWMemes(NSFW_MEMES_ARR));

  message.channel.send({ embed }).catch(console.error);

  function generateSFWMemes(arr) {
    return arr.sort().join('\n');
  }

  function generateNSFWMemes(arr) {
    return arr.sort().join('\n');
  }
};
