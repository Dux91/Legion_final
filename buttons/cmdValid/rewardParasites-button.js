const { MessageEmbed, MessageActionRow, MessageButton} = require('discord.js');

module.exports = {
  name: 'rewardParasites-button',
  async runInteraction(client, interaction, memberSettings) {
    const memberXp = memberSettings.xp;
    const newXp = (memberXp + 250);
    const memberLvl = memberSettings.level;
    const newLvl = (memberLvl + 1);
    const memberUpLvl = memberSettings.xpToLvlUp;
    const newLvlToUp = (memberUpLvl + 600)

    const buttons = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setCustomId('rewardParasites-button')
        .setLabel('Accepter la récompense')
        .setStyle('SECONDARY')
        .setEmoji('854326960586883072')
        .setDisabled(true),

      );

      await client.updateMember(interaction.member, {xp: newXp});
        if ( newXp >= memberUpLvl ) {
          await client.updateMember(interaction.member, {level: newLvl});
          await client.updateMember(interaction.member, {xpToLvlUp: newLvlToUp});
        };
        if (newLvl >= 10) {
          interaction.member.roles.add('823570094461419591');
          interaction.member.roles.remove('830448046675591249');
        } else if (newLvl >= 15) {
          interaction.member.roles.add('830538603247304715');
          interaction.member.roles.remove('823570094461419591');
        } else if (newLvl >= 21) {
          interaction.member.roles.add('830539068613853184');
          interaction.member.roles.remove('830538603247304715');
        } else if (newLvl >= 30) {
          interaction.member.roles.add('830538850744139847');
          interaction.member.roles.remove('830539068613853184');
        } else if (newLvl >= 41) {
          interaction.member.roles.add('830537986844262420');
          interaction.member.roles.remove('830538850744139847');
        } else if (newLvl >= 57) {
          interaction.member.roles.add('830540453761908787');
          interaction.member.roles.remove('830537986844262420');
        } else if (newLvl >= 72) {
          interaction.member.roles.add('830541145124634644');
          interaction.member.roles.remove('830540453761908787');
        };
 
      await interaction.update({ content: 'Statut: *Mission terminée* 250 <:XP:854326960586883072> crédités!', components: [buttons], fetchReply: true, deferred : true });
      
  },
};