const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
  name: 'soutien-button',
  async runInteraction(client, interaction) {
    const memberSpecId = ['826879046386057271','826874169010552852','826878536157626378','826877653276950568'];
    const newMemberSpecId = ['826877653276950568'];

    await interaction.member.roles.remove(memberSpecId);
    await interaction.member.roles.add(newMemberSpecId);

    const soutienEmbed = new MessageEmbed()
      .setColor('#00FF00')
      .setThumbnail('https://zupimages.net/up/22/24/tgsc.png')
      .setTitle('**--------- NOUVEAU SPECIALISTE SOUTIEN ---------**')
      .setTimestamp()
      .setFooter({ 
        text: (`${interaction.member.user.tag}`),
        iconURL: interaction.member.user.displayAvatarURL(),
      });

    await interaction.reply({ embeds: [soutienEmbed] });
  },
};