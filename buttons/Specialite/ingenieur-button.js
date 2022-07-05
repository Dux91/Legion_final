const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
  name: 'ingenieur-button',
  async runInteraction(client, interaction) {
    const memberSpecId = ['826879046386057271','826874169010552852','826878536157626378','826877653276950568'];
    const newMemberSpecId = ['826879046386057271'];

    await interaction.member.roles.remove(memberSpecId);
    await interaction.member.roles.add(newMemberSpecId);

    const ingenieurEmbed = new MessageEmbed()
      .setColor('#2C75FF')
      .setThumbnail('https://zupimages.net/up/22/24/lrsc.png')
      .setTitle('**--------- NOUVEAU SPECIALISTE INGENIEUR ---------**')
      .setTimestamp()
      .setFooter({ 
        text: (`${interaction.member.user.tag}`),
        iconURL: interaction.member.user.displayAvatarURL(),
      });

    await interaction.reply({ embeds: [ingenieurEmbed] });
  },
};