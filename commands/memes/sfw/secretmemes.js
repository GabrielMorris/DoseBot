// Displays list of memes
exports.run = (client, message, args) => {
  const Discord = require('discord.js');

  const SFW_MEMES_ARR = [
    '--alexis',
    '--cocoa',
    '--communism',
    '--donot',
    '--doris',
    '--dust',
    '--etizolab',
    '--evebnire',
    '--frogmodai',
    '--geometry',
    '--sketchy',
    '--greentea',
    '--harmreduction',
    '--heart',
    '--illusion',
    '--kat',
    '--kat2',
    '--katcase',
    '--kaylee',
    '--kayleetriggered',
    '--luxury',
    '--mascot',
    '--rob',
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
    '--banana'
  ];
  const NSFW_MEMES_ARR = ['--dong', '--josildo', '--math', '--nsfwmascot'];

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
