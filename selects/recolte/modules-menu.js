const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
  name: 'modules-menu',
  async runInteraction(client, interaction) {

    const ressourceNumber = interaction.values;

    if ( ressourceNumber == '01' ){ 
      const embed = new MessageEmbed()
        .setColor('#FFFF00')
        .setThumbnail('https://zupimages.net/up/22/24/zx7y.png')
        .setTitle('-------- Mission Récolte --------')
        .addFields(
        { name: 'Modules', value: `6 modules d'exocombinaison indentiques classe S au choix.`},
        { name: 'Etat', value: `En attente de livraison`},
        { name: 'Récompense', value: `50 <:XP:854326960586883072>\n4000 <:MC:935563515945705553>`}
        )
        .setTimestamp()
        .setFooter({ 
          text: (`Initialisé par: ${interaction.member.user.tag}`),
          iconURL: interaction.member.user.displayAvatarURL(),
        });
        const buttons = new MessageActionRow()
        .addComponents(
          new MessageButton()
          .setCustomId('validExocombinaison-button')
          .setLabel('Valider la mission')
          .setStyle('SECONDARY')
          .setEmoji('831196656434937856'),
              
          new MessageButton()
          .setCustomId('unvalidExocombinaison-button')
          .setLabel('Annuler la mission')
          .setStyle('SECONDARY')
          .setEmoji('831197387153211462'),
      
        );

      await interaction.update({ content: ' ', embeds: [embed], components: [buttons],  fetchReply: true });

    }
       
    if ( ressourceNumber == '02' ){
      const embed = new MessageEmbed()
      .setColor('#FFFF00')
      .setThumbnail('https://zupimages.net/up/22/24/zx7y.png')
      .setTitle('-------- Mission Récolte --------')
      .addFields(
        { name: 'Modules', value: `6 modules de multi-outils indentiques classe S au choix.`},
        { name: 'Etat', value: `En attente de livraison`},
        { name: 'Récompense', value: `50 <:XP:854326960586883072>\n4000 <:MC:935563515945705553>`}
        )
        .setTimestamp()
        .setFooter({ 
          text: interaction.user.username,
          iconURL: interaction.user.displayAvatarURL(),
        });
        const buttons = new MessageActionRow()
        .addComponents(
          new MessageButton()
          .setCustomId('validMultioutils-button')
          .setLabel('Valider la mission')
          .setStyle('SECONDARY')
          .setEmoji('831196656434937856'),
              
          new MessageButton()
          .setCustomId('unvalidMultioutils-button')
          .setLabel('Annuler la mission')
          .setStyle('SECONDARY')
          .setEmoji('831197387153211462'),
      
        );
  
      await interaction.update({ content: ' ', embeds: [embed], components: [buttons], fetchReply: true });
    }

    if ( ressourceNumber == '03' ){
      const embed = new MessageEmbed()
      .setColor('#FFFF00')
      .setThumbnail('https://zupimages.net/up/22/24/zx7y.png')
      .setTitle('-------- Mission Récolte --------')
      .addFields(
        { name: 'Modules', value: `6 modules d\'exonef indentiques classe S au choix.`},
        { name: 'Etat', value: `En attente de livraison`},
        { name: 'Récompense', value: `50 <:XP:854326960586883072>\n4000 <:MC:935563515945705553>`}
        )
        .setTimestamp()
        .setFooter({ 
          text: interaction.user.username,
          iconURL: interaction.user.displayAvatarURL(),
        });
        const buttons = new MessageActionRow()
        .addComponents(
          new MessageButton()
          .setCustomId('validExonef-button')
          .setLabel('Valider la mission')
          .setStyle('SECONDARY')
          .setEmoji('831196656434937856'),
              
          new MessageButton()
          .setCustomId('unvalidExonef-button')
          .setLabel('Annuler la mission')
          .setStyle('SECONDARY')
          .setEmoji('831197387153211462'),
      
        );
  
      await interaction.update({ content: ' ', embeds: [embed], components: [buttons], fetchReply: true });
    }

    if ( ressourceNumber == '04' ){
      const embed = new MessageEmbed()
      .setColor('#FFFF00')
      .setThumbnail('https://zupimages.net/up/22/24/zx7y.png')
      .setTitle('-------- Mission Récolte --------')
      .addFields(
        { name: 'Modules', value: `6 modules de vaisseau indentiques classe S au choix.`},
        { name: 'Etat', value: `En attente de livraison`},
        { name: 'Récompense', value: `50 <:XP:854326960586883072>\n4000 <:MC:935563515945705553>`}
        )
        .setTimestamp()
        .setFooter({ 
          text: interaction.user.username,
          iconURL: interaction.user.displayAvatarURL(),
        });
        const buttons = new MessageActionRow()
        .addComponents(
          new MessageButton()
          .setCustomId('validVaisseau-button')
          .setLabel('Valider la mission')
          .setStyle('SECONDARY')
          .setEmoji('831196656434937856'),
              
          new MessageButton()
          .setCustomId('unvalidVaisseau-button')
          .setLabel('Annuler la mission')
          .setStyle('SECONDARY')
          .setEmoji('831197387153211462'),
      
        );
  
      await interaction.update({ content: ' ', embeds: [embed], components: [buttons], fetchReply: true });
    }

    if ( ressourceNumber == '05' ){
      const embed = new MessageEmbed()
      .setColor('#FFFF00')
      .setThumbnail('https://zupimages.net/up/22/24/zx7y.png')
      .setTitle('-------- Mission Récolte --------')
      .addFields(
        { name: 'Modules', value: `6 modules de frégates indentiques classe S au choix.`},
        { name: 'Etat', value: `En attente de livraison`},
        { name: 'Récompense', value: `300 <:XP:854326960586883072>\n500 <:MC:935563515945705553>`}
        )
        .setTimestamp()
        .setFooter({ 
          text: interaction.user.username,
          iconURL: interaction.user.displayAvatarURL(),
        });
        const buttons = new MessageActionRow()
        .addComponents(
          new MessageButton()
          .setCustomId('validFregate-button')
          .setLabel('Valider la mission')
          .setStyle('SECONDARY')
          .setEmoji('831196656434937856'),
              
          new MessageButton()
          .setCustomId('unvalidFregate-button')
          .setLabel('Annuler la mission')
          .setStyle('SECONDARY')
          .setEmoji('831197387153211462'),
      
        );
  
      await interaction.update({ content: ' ', embeds: [embed], components: [buttons], fetchReply: true });
    }

    if ( ressourceNumber == '06' ){
      const embed = new MessageEmbed()
      .setColor('#FFFF00')
      .setThumbnail('https://zupimages.net/up/22/24/9aqs.png')
      .setTitle('-------- Mission Récolte --------')
      .addFields(
        { name: 'modules', value: `20 Cerveaux de marcheur.`},
        { name: 'Etat', value: `En attente de livraison`},
        { name: 'Récompense', value: `200 <:XP:854326960586883072>\n2000 <:MC:935563515945705553>`}
        )
        .setTimestamp()
        .setFooter({ 
          text: interaction.user.username,
          iconURL: interaction.user.displayAvatarURL(),
        });
        const buttons = new MessageActionRow()
        .addComponents(
          new MessageButton()
          .setCustomId('validCerveaudemarcheur-button')
          .setLabel('Valider la mission')
          .setStyle('SECONDARY')
          .setEmoji('831196656434937856'),
              
          new MessageButton()
          .setCustomId('unvalidCerveaudemarcheur-button')
          .setLabel('Annuler la mission')
          .setStyle('SECONDARY')
          .setEmoji('831197387153211462'),
      
        );
  
      await interaction.update({ content: ' ', embeds: [embed], components: [buttons], fetchReply: true });
    }
  }
}