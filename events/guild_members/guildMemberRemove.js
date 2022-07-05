const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'guildMemberRemove',
  once: false,
  async execute(client, member) {
    const embed = new MessageEmbed()
      .setThumbnail('https://zupimages.net/up/22/18/k76p.png')          
      .setAuthor({ name: `${member.user.tag} (${member.id})` , iconURL: member.user.displayAvatarURL() })
      .setColor('#FF0000')
      .setDescription(`- Nom d\'utilisateur: ${member.displayName}\n- Créé le: <t:${parseInt(member.user.createdTimestamp / 1000)}:f> (<t:${parseInt(member.user.createdTimestamp / 1000)}:R>)\n- Rejoint le: <t:${parseInt(member.joinedTimestamp / 1000)}:f> (<t:${parseInt(member.joinedTimestamp / 1000)}:R>)\n- Quitté le: <t:${parseInt(Date.now() / 1000)}:f> (<t:${parseInt(Date.now() / 1000)}:R>)\n\nUn départ digne d\'une faible créature,\nson corps flotte maintenant à l'arrière du vaisseau de **Lucky**!\nSeuls les véritables **Blacks** resteront!\n\n**Dans l\'ombre, nous agissons !**`)
      .setTimestamp()

    const logChannel = client.channels.cache.get('821889905633394691');
    logChannel.send({ embeds: [embed] });

  },
};
