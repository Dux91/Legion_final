const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'userinfo',
  category: 'contextuel',
  permissions: ['SEND_MESSAGES'],
  ownerOnly: false,
  usage: 'Utiliser le menu contextuel de Discord',
  examples: ['clic droit sur utilisateur'],
  type: 'USER',
  async runInteraction(client, interaction) {
    const member = await interaction.guild.members.fetch(interaction.targetId);
    
    const embed = new MessageEmbed()
      .setAuthor({ name: `${member.user.tag} (${member.id})`, iconURL: member.user.bot ? 'https://www.pinclipart.com/picdir/big/523-5236439_transparent-robot-clipart-png-icon-robot.png' : 'https://www.pinclipart.com/picdir/big/534-5340009_astronaut-helmet-icon-astronaut-helmet-icon-png-clipart.png' })
      .setColor('#000000')
      .setImage(member.user.displayAvatarURL())
      .addFields(
        { name: 'Nom', value: `${member.displayName}`, inline: true },
        { name: 'Modérateur', value: `${member.kickable ? '🔴' : '🟢'}`, inline: true },
        { name: 'Bot', value: `${member.user.bot ? '🟢' : '🔴'}`, inline: true },
        { name: 'Roles', value: `${member.roles.cache.map(role => role).join(', ').replace(', @everyone', ' ')}` },
        { name: 'A créé son compte le', value: `<t:${parseInt(member.user.createdTimestamp / 1000)}:f> (<t:${parseInt(member.user.createdTimestamp / 1000)}:R>)`},
        { name: 'a rejoint le serveur le', value: `Rejoint le: <t:${parseInt(member.joinedTimestamp / 1000)}:f> (<t:${parseInt(member.joinedTimestamp / 1000)}:R>)`},
      )
      

    interaction.reply({ embeds: [embed], ephemeral: true });
  }
};