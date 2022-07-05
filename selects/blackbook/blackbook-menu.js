const {MessageEmbed} = require('discord.js');

module.exports = {
  name: 'blackbook-menu',
  async runInteraction(client, interaction) {

    const ressourceNumber = interaction.values;

    if ( ressourceNumber == '01' ){
      const Embed1 = new MessageEmbed().setImage('https://zupimages.net/up/22/25/mgpb.png')
      const Embed2 = new MessageEmbed().setImage('https://zupimages.net/up/22/25/585t.png')

      await interaction.reply({ content: ' ', embeds: [Embed1], fetchReply: true, ephemeral: true });
      await interaction.followUp({ content: ' ', embeds: [Embed2], fetchReply: true, ephemeral: true });

    }
       
    if ( ressourceNumber == '02' ){
      const Embed3 = new MessageEmbed().setImage('https://zupimages.net/up/22/25/n9au.png')
      const Embed4 = new MessageEmbed().setImage('https://zupimages.net/up/22/25/ce7w.png')
      const Embed5 = new MessageEmbed().setImage('https://zupimages.net/up/22/25/b0gr.png')
      const Embed6 = new MessageEmbed().setImage('https://zupimages.net/up/22/25/vpm6.png')
      const Embed7 = new MessageEmbed().setImage('https://zupimages.net/up/22/25/1jpl.png')
      const Embed8 = new MessageEmbed().setImage('https://zupimages.net/up/22/25/d2cx.png')
      const Embed9 = new MessageEmbed().setImage('https://zupimages.net/up/22/25/sad6.png')

      await interaction.reply({ content: ' ', embeds: [Embed3], fetchReply: true, ephemeral: true });
      await interaction.followUp({ content: ' ', embeds: [Embed4], fetchReply: true, ephemeral: true });
      await interaction.followUp({ content: ' ', embeds: [Embed5], fetchReply: true, ephemeral: true });
      await interaction.followUp({ content: ' ', embeds: [Embed6], fetchReply: true, ephemeral: true });
      await interaction.followUp({ content: ' ', embeds: [Embed7], fetchReply: true, ephemeral: true });
      await interaction.followUp({ content: ' ', embeds: [Embed8], fetchReply: true, ephemeral: true });
      await interaction.followUp({ content: ' ', embeds: [Embed9], fetchReply: true, ephemeral: true });
    }

    if ( ressourceNumber == '03' ){
      const Embed10 = new MessageEmbed().setImage('https://zupimages.net/up/22/26/y82k.png')
      const Embed11 = new MessageEmbed().setImage('https://zupimages.net/up/22/26/no3h.png')
      const Embed12 = new MessageEmbed().setImage('https://zupimages.net/up/22/26/cgh0.png')
  
      await interaction.reply({ content: ' ', embeds: [Embed10], fetchReply: true, ephemeral: true });
      await interaction.followUp({ content: ' ', embeds: [Embed11], fetchReply: true, ephemeral: true });
      await interaction.followUp({ content: ' ', embeds: [Embed12], fetchReply: true, ephemeral: true });
    }

    if ( ressourceNumber == '04' ){
      const Embed13 = new MessageEmbed().setImage('https://zupimages.net/up/22/25/hl6f.png')
      const Embed14 = new MessageEmbed().setImage('https://zupimages.net/up/22/25/yoz2.png')
      const Embed15 = new MessageEmbed().setImage('https://zupimages.net/up/22/25/ndjd.png')
  
      await interaction.reply({ content: ' ', embeds: [Embed13], fetchReply: true, ephemeral: true });
      await interaction.followUp({ content: ' ', embeds: [Embed14], fetchReply: true, ephemeral: true });
      await interaction.followUp({ content: ' ', embeds: [Embed15], fetchReply: true, ephemeral: true });
    }
  }
}