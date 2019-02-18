// add quote
exports.run = (client, message, args) => {
  if (
    message.guild.id === '523227599103590421' ||
    message.guild.id === '481218726868418570'
  ) {
    const Quote = require('../../include/quote.js');

    // murty this is a quote
    let str = message.content
      .replace('--addquote ', '', -1)
      .replace(/-/g, '', -1);
    // [murty, this, is, a, quote]
    let strArr = str.split(' ');
    let author = strArr[0];
    let quoteToAddArr = strArr.splice(1, strArr.length);
    let quote = quoteToAddArr.join(' ');

    if (message.content.length >= 9) {
      console.log(`Adding quote - Author: ${author} Quote: ${quote}`);

      Quote.insertQuote(message, quote, author);
    } else {
      message.channel.send(
        '**Error**: No quote provided - Syntax: --addquote <author> <quote>'
      );
    }
  }
};
