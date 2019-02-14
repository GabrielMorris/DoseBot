require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const CommandSystem = require('./command-system.js')();

// On ready logic
client.on('ready', () => {
  // Update game message on launch
  updateGameMessage();
  console.log('DoseBot is online - beep boop');
});

// Log new guild joins
client.on('guildCreate', guild => {
  // Update game message on new server join
  updateGameMessage();
  console.log(
    `New server joined - Name: ${guild.name} Members: ${guild.memberCount}`
  );
});

// Pass messages to the CommandSystem
client.on('message', message => {
  // For logging CFP admin arbitration discussions
  if (message.guild.id === '527662149682724905') {
    console.log(
      `ARBITRATION - Author: ${message.author.username} Message: ${
        message.content
      }`
    );
  }
  CommandSystem.execute(client, message);
});

CommandSystem.load(function() {
  console.log('Command system loaded.');
});

client.login(process.env.DISCORD_API_TOKEN);

function updateGameMessage() {
  // Logs guilds and member counts
  let servers = client.guilds;
  let userCount = 0;
  let servercount = 0;

  servers.forEach(guild => {
    userCount += guild.memberCount;
    servercount++;
    console.log(
      `Guild: ${guild.name} ID: ${guild.id} Members: ${guild.memberCount}`
    );
  });

  let botGame = `${userCount} users on ${servercount} servers`;
  client.user
    .setActivity(botGame)
    .then(presence =>
      console.log(
        `Currently serving ${userCount} users on ${servercount} servers`
      )
    )
    .catch(console.error);
}
