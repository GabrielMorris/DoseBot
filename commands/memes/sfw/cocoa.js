//Cocoa message
exports.run = (client, message, args) => {
  message.channel.send('https://i.imgur.com/MLmGTll.jpg');
  message.channel
    .send(
      'Hail <@278301453620084736>, right hand of the revolution\nThe lightkeeper\nBotmaster\nDefender of the Northern Realms'
    )
    .catch(console.error);
};
