const {MessageEmbed, MessageActionRow, MessageSelectMenu, MessageAttachment} = require('discord.js');

const selectMenu = new MessageActionRow()
  .addComponents(
    new MessageSelectMenu()
      .setCustomId('blackbook-menu')
      .setPlaceholder('Choisis le chapitre que tu souhaites consulter!')
      .setMinValues(1)
      .setMaxValues(1)
      .addOptions([
        {
          label: 'Introduction',
          description: 'Pages 01 et 02',
          value: '01'
        },
        {
          label: 'Missions',
          description: 'Pages 03 à 09',
          value: '02'
        },
        {
          label: 'Xp et niveau',
          description: 'Pages 10 à 12',
          value: '03'
        },
        {
          label: 'Tactiques',
          description: 'Pages 13 à 15',
          value: '04'
        },
      ])
  );

module.exports = {
  name: 'blackbook',
  category: 'utils',
  permissions: ['SEND_MESSAGES'],
  ownerOnly: false,
  usage: 'blackbook',
  examples: ['blackbook'],
  description: 'Choix du chapitre que tu souhaites consulter',
  async runInteraction(client, interaction) {
    const Embed = new MessageEmbed().setImage('https://zupimages.net/up/22/25/88wj.png');
    const Blackboard = ('851066755429695498');
   
    let memberSettings = await client.getMember(interaction.member);

    if (!memberSettings) {
      await client.createMember(interaction.member);
      memberSettings = await client.getMember(interaction.member);
    };

    if (interaction.channelId !== Blackboard)return interaction.reply({ content:'Cette commande doit être initialisée dans le salon <#851066755429695498>!', ephemeral: true });
    
    await interaction.reply({content: ' ', embeds: [Embed] , components: [selectMenu], ephemeral: true });
  }
  
};