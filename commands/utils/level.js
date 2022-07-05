const { createCanvas, loadImage } = require("canvas");
const { MessageAttachment } = require('discord.js');

module.exports = {
  name: 'level',
  category: 'utils',
  permissions: ['SEND_MESSAGES'],
  ownerOnly: false,
  usage: 'level',
  examples: ['level'],
  description: 'Afficher son niveau et ses XP!',
  async runInteraction(client, interaction, memberSettings) {
    interaction.reply({content: '*--- Compilation des données en cours, patientes un instant! ---*'})
      
    const canvas = createCanvas(1000, 300);
    const ctx = canvas.getContext("2d");
    const background = await loadImage("https://zupimages.net/up/22/25/9yv6.png");
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#F5C617"
    ctx.globalAlpha = 0,4;
    ctx.fillStyle = "#000";
    ctx.fillRect(220, 200, 550, 55);
    ctx.globalAlpha = 1;
    ctx.strokeRect(220, 200, 550, 35);

    ctx.fillStyle = "#F5C617";
    ctx.globalAlpha = 0.5;
    ctx.fillRect(220, 202, (100 / (`${memberSettings.xpToLvlUp}`) * `${memberSettings.xp}`) * 5.5, 31);

    ctx.globalAlpha = 1;
    ctx.font = "20px Arial"
    ctx.textAlign = "right";
    ctx.fillStyle = "#fff";
    ctx.fillText(`${memberSettings.xp} / ${memberSettings.xpToLvlUp} XP`, 400, 225);
    
    ctx.textAlign = "center"
    ctx.fillStyle = "#fff"
    ctx.fillText("Level Card Black Squadron", 480, 90);
    ctx.textAlign = "left"
    ctx.font = "30px Arial"
    ctx.fillText(interaction.member.user.tag, 360, 140);
    ctx.font = "20px Arial"
    ctx.fillText(`Niveau: ${memberSettings.level}`, 660, 225);

    ctx.arc(280, 120, 58, 0, Math.PI * 2, true);
    ctx.lineWidth = 6;
    ctx.strokeStyle = "#F5C617";
    ctx.stroke();
    ctx.closePath();
    ctx.clip();
    const avatar = await loadImage(interaction.member.user.displayAvatarURL({ format: "jpg"}));
    ctx.drawImage(avatar, 220, 62, 120, 120);

    const attachment = new MessageAttachment(canvas.toBuffer(), "rank.png");
    await interaction.editReply({content:' ',files: [attachment]});
  },
};