const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
  name: 'eclaireur-button',
  async runInteraction(client, interaction) {
    const memberSpecId = ['826879046386057271','826874169010552852','826878536157626378','826877653276950568'];
    const newMemberSpecId = ['826878536157626378'];

    await interaction.member.roles.remove(memberSpecId);
    await interaction.member.roles.add(newMemberSpecId);

    const eclaireurEmbed = new MessageEmbed()
      .setColor('#808080')
      .setThumbnail('https://zupimages.net/up/22/24/0c3j.png')
      .setTitle('**--------- NOUVEAU SPECIALISTE ECLAIREUR ---------**')
      .setTimestamp()
      .setFooter({ 
        text: (`${interaction.member.user.tag}`),
        iconURL: interaction.member.user.displayAvatarURL(),
      });

    await interaction.reply({ embeds: [eclaireurEmbed] });
  },
};