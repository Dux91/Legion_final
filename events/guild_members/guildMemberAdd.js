const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'guildMemberAdd',
  once: false,
  async execute(client, member) {

    let memberSettings = await client.getMember(member);

    if (!memberSettings) {
      await client.createMember(member);
      memberSettings = await client.getMember(member);
    }

    member.roles.add('848555681987428373', '830448046675591249');

    const embed = new MessageEmbed()
      .setThumbnail('https://zupimages.net/up/22/18/k76p.png')          
      .setAuthor({ name: `${member.user.tag} (${member.id})` , iconURL: member.user.displayAvatarURL() })
      .setColor('#21ff81')
      .setDescription(`- Nom d\'utilisateur: ${member}\n- Créé le: <t:${parseInt(member.user.createdTimestamp / 1000)}:f> (<t:${parseInt(member.user.createdTimestamp / 1000)}:R>)\n- Rejoint le: <t:${parseInt(member.joinedTimestamp / 1000)}:f> (<t:${parseInt(member.joinedTimestamp / 1000)}:R>)\n\n**Prospect**, bienvenue dans le **Black squadron**!\nIci se trouve l\'élite des mercenaires.\nPour intégrer les **Maîtres de l\'ombre**, tu devras prouver ta valeur et surtout ta motivation.\nMontre nous que tu es digne d\'être ici, et tu seras récompensé au delà de tes attentes.\nCe sera difficile, et seuls les plus méritants pourrons être appelés **Blacks** !\n\nAfin de comprendre notre fonctionnement, tu peux taper la commande **/blackbook** dans le salon <#851066755429695498>,\nil te guidera au sein de notre organisation!\n\n**Dans l\'ombre, nous agissons!**
      `)
      .setTimestamp()

    const logChannel = client.channels.cache.get('821889905633394691');
    logChannel.send({ embeds: [embed] });
    
  },
};
