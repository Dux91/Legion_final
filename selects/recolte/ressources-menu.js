const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
  name: 'ressources-menu',
  async runInteraction(client, interaction) {

    const ressourceNumber = interaction.values;

    if ( ressourceNumber == '01' ){ 
      const embed = new MessageEmbed()
        .setColor('#2C75FF')
        .setThumbnail('https://zupimages.net/up/22/23/1jbu.png')
        .setTitle('-------- Mission Récolte --------')
        .addFields(
        { name: 'Ressources', value: `50k unités d\'Or.`},
        { name: 'Etat', value: `En attente de livraison`},
        { name: 'Récompense', value: `100 <:XP:854326960586883072>\n600 <:MC:935563515945705553>`}
        )
        .setTimestamp()
        .setFooter({ 
          text: (`Initialisé par: ${interaction.member.user.tag}`),
          iconURL: interaction.member.user.displayAvatarURL(),
        });
        const buttons = new MessageActionRow()
        .addComponents(
          new MessageButton()
          .setCustomId('validOr-button')
          .setLabel('Valider la mission')
          .setStyle('SECONDARY')
          .setEmoji('831196656434937856'),
              
          new MessageButton()
          .setCustomId('unvalidOr-button')
          .setLabel('Annuler la mission')
          .setStyle('SECONDARY')
          .setEmoji('831197387153211462'),
      
        );

      await interaction.update({ content: ' ', embeds: [embed], components: [buttons],  fetchReply: true });

    }
       
    if ( ressourceNumber == '02' ){
      const embed = new MessageEmbed()
      .setColor('#2C75FF')
      .setThumbnail('https://zupimages.net/up/22/23/k9zc.png')
      .setTitle('-------- Mission Récolte --------')
      .addFields(
        { name: 'Ressources', value: `50k unités d\'Argent.`},
        { name: 'Etat', value: `En attente de livraison`},
        { name: 'Récompense', value: `100 <:XP:854326960586883072>\n600 <:MC:935563515945705553>`}
        )
        .setTimestamp()
        .setFooter({ 
          text: interaction.user.username,
          iconURL: interaction.user.displayAvatarURL(),
        });
        const buttons = new MessageActionRow()
        .addComponents(
          new MessageButton()
          .setCustomId('validArgent-button')
          .setLabel('Valider la mission')
          .setStyle('SECONDARY')
          .setEmoji('831196656434937856'),
              
          new MessageButton()
          .setCustomId('unvalidArgent-button')
          .setLabel('Annuler la mission')
          .setStyle('SECONDARY')
          .setEmoji('831197387153211462'),
      
        );
  
      await interaction.update({ content: ' ', embeds: [embed], components: [buttons], fetchReply: true });
    }

    if ( ressourceNumber == '03' ){
      const embed = new MessageEmbed()
      .setColor('#2C75FF')
      .setThumbnail('https://zupimages.net/up/22/23/uenq.png')
      .setTitle('-------- Mission Récolte --------')
      .addFields(
        { name: 'Ressources', value: `50k unités d\'Oxygène.`},
        { name: 'Etat', value: `En attente de livraison`},
        { name: 'Récompense', value: `250 <:XP:854326960586883072>\n1000 <:MC:935563515945705553>`}
        )
        .setTimestamp()
        .setFooter({ 
          text: interaction.user.username,
          iconURL: interaction.user.displayAvatarURL(),
        });
        const buttons = new MessageActionRow()
        .addComponents(
          new MessageButton()
          .setCustomId('validOxygène-button')
          .setLabel('Valider la mission')
          .setStyle('SECONDARY')
          .setEmoji('831196656434937856'),
              
          new MessageButton()
          .setCustomId('unvalidOxygène-button')
          .setLabel('Annuler la mission')
          .setStyle('SECONDARY')
          .setEmoji('831197387153211462'),
      
        );
  
      await interaction.update({ content: ' ', embeds: [embed], components: [buttons], fetchReply: true });
    }

    if ( ressourceNumber == '04' ){
      const embed = new MessageEmbed()
      .setColor('#2C75FF')
      .setThumbnail('https://zupimages.net/up/22/23/57jn.png')
      .setTitle('-------- Mission Récolte --------')
      .addFields(
        { name: 'Ressources', value: `150k unités Poussière de Ferrite.`},
        { name: 'Etat', value: `En attente de livraison`},
        { name: 'Récompense', value: `50 <:XP:854326960586883072>\n200 <:MC:935563515945705553>`}
        )
        .setTimestamp()
        .setFooter({ 
          text: interaction.user.username,
          iconURL: interaction.user.displayAvatarURL(),
        });
        const buttons = new MessageActionRow()
        .addComponents(
          new MessageButton()
          .setCustomId('validPoussièredeFerrite-button')
          .setLabel('Valider la mission')
          .setStyle('SECONDARY')
          .setEmoji('831196656434937856'),
              
          new MessageButton()
          .setCustomId('unvalidPoussièredeFerrite-button')
          .setLabel('Annuler la mission')
          .setStyle('SECONDARY')
          .setEmoji('831197387153211462'),
      
        );
  
      await interaction.update({ content: ' ', embeds: [embed], components: [buttons], fetchReply: true });
    }

    if ( ressourceNumber == '05' ){
      const embed = new MessageEmbed()
      .setColor('#2C75FF')
      .setThumbnail('https://zupimages.net/up/22/23/cwfi.png')
      .setTitle('-------- Mission Récolte --------')
      .addFields(
        { name: 'Ressources', value: `50k unités de Sodium.`},
        { name: 'Etat', value: `En attente de livraison`},
        { name: 'Récompense', value: `100 <:XP:854326960586883072>\n600 <:MC:935563515945705553>`}
        )
        .setTimestamp()
        .setFooter({ 
          text: interaction.user.username,
          iconURL: interaction.user.displayAvatarURL(),
        });
        const buttons = new MessageActionRow()
        .addComponents(
          new MessageButton()
          .setCustomId('validSodium-button')
          .setLabel('Valider la mission')
          .setStyle('SECONDARY')
          .setEmoji('831196656434937856'),
              
          new MessageButton()
          .setCustomId('unvalidSodium-button')
          .setLabel('Annuler la mission')
          .setStyle('SECONDARY')
          .setEmoji('831197387153211462'),
      
        );
  
      await interaction.update({ content: ' ', embeds: [embed], components: [buttons], fetchReply: true });
    }

    if ( ressourceNumber == '06' ){
      const embed = new MessageEmbed()
      .setColor('#2C75FF')
      .setThumbnail('https://zupimages.net/up/22/23/rxde.png')
      .setTitle('-------- Mission Récolte --------')
      .addFields(
        { name: 'Ressources', value: `50k unités de Cobalt.`},
        { name: 'Etat', value: `En attente de livraison`},
        { name: 'Récompense', value: `100 <:XP:854326960586883072>\n600 <:MC:935563515945705553>`}
        )
        .setTimestamp()
        .setFooter({ 
          text: interaction.user.username,
          iconURL: interaction.user.displayAvatarURL(),
        });
        const buttons = new MessageActionRow()
        .addComponents(
          new MessageButton()
          .setCustomId('validCobalt-button')
          .setLabel('Valider la mission')
          .setStyle('SECONDARY')
          .setEmoji('831196656434937856'),
              
          new MessageButton()
          .setCustomId('unvalidCobalt-button')
          .setLabel('Annuler la mission')
          .setStyle('SECONDARY')
          .setEmoji('831197387153211462'),
      
        );
  
      await interaction.update({ content: ' ', embeds: [embed], components: [buttons], fetchReply: true });
    }

    if ( ressourceNumber == '07' ){
      const embed = new MessageEmbed()
      .setColor('#2C75FF')
      .setThumbnail('https://zupimages.net/up/22/23/jrck.png')
      .setTitle('-------- Mission Récolte --------')
      .addFields(
        { name: 'Ressources', value: `50 Perles vivantes.`},
        { name: 'Etat', value: `En attente de livraison`},
        { name: 'Récompense', value: `200 <:XP:854326960586883072>\n800 <:MC:935563515945705553>`}
        )
        .setTimestamp()
        .setFooter({ 
          text: interaction.user.username,
          iconURL: interaction.user.displayAvatarURL(),
        });
        const buttons = new MessageActionRow()
        .addComponents(
          new MessageButton()
          .setCustomId('validPerlesvivantes-button')
          .setLabel('Valider la mission')
          .setStyle('SECONDARY')
          .setEmoji('831196656434937856'),
              
          new MessageButton()
          .setCustomId('unvalidPerlesvivantes-button')
          .setLabel('Annuler la mission')
          .setStyle('SECONDARY')
          .setEmoji('831197387153211462'),
      
        );
  
      await interaction.update({ content: ' ', embeds: [embed], components: [buttons], fetchReply: true });
    }

    if ( ressourceNumber == '08' ){ 
      const embed = new MessageEmbed()
        .setColor('#2C75FF')
        .setThumbnail('https://zupimages.net/up/22/23/cz2d.png')
        .setTitle('-------- Mission Récolte --------')
        .addFields(
        { name: 'Ressources', value: `50 Crystaux gelés.`},
        { name: 'Etat', value: `En attente de livraison`},
        { name: 'Récompense', value: `250 <:XP:854326960586883072>\n1000 <:MC:935563515945705553>`}
        )
        .setTimestamp()
        .setFooter({ 
          text: interaction.user.username,
          iconURL: interaction.user.displayAvatarURL(),
        });
        const buttons = new MessageActionRow()
        .addComponents(
          new MessageButton()
          .setCustomId('validCrystauxgelés-button')
          .setLabel('Valider la mission')
          .setStyle('SECONDARY')
          .setEmoji('831196656434937856'),
              
          new MessageButton()
          .setCustomId('unvalidCrystauxgelés-button')
          .setLabel('Annuler la mission')
          .setStyle('SECONDARY')
          .setEmoji('831197387153211462'),
      
        );

      await interaction.update({ content: ' ', embeds: [embed], components: [buttons], fetchReply: true });
    }

    if ( ressourceNumber == '09' ){ 
      const embed = new MessageEmbed()
        .setColor('#2C75FF')
        .setThumbnail('https://zupimages.net/up/22/23/g97a.png')
        .setTitle('-------- Mission Récolte --------')
        .addFields(
        { name: 'Ressources', value: `50 Crystaux de sulfure.`},
        { name: 'Etat', value: `En attente de livraison`},
        { name: 'Récompense', value: `200 <:XP:854326960586883072>\n800 <:MC:935563515945705553>`}
        )
        .setTimestamp()
        .setFooter({ 
          text: interaction.user.username,
          iconURL: interaction.user.displayAvatarURL(),
        });
        const buttons = new MessageActionRow()
        .addComponents(
          new MessageButton()
          .setCustomId('validCrystauxdesulfure-button')
          .setLabel('Valider la mission')
          .setStyle('SECONDARY')
          .setEmoji('831196656434937856'),
              
          new MessageButton()
          .setCustomId('unvalidCrystauxdesulfure-button')
          .setLabel('Annuler la mission')
          .setStyle('SECONDARY')
          .setEmoji('831197387153211462'),
      
        );
        
      await interaction.update({ content: ' ', embeds: [embed], components: [buttons], fetchReply: true });
    }
  }
}