const { createCanvas, loadImage } = require("canvas");
const { MessageAttachment } = require('discord.js');

module.exports = {
  name: 'idcard',
  category: 'utils',
  permissions: ['SEND_MESSAGES'],
  ownerOnly: false,
  usage: 'idcard',
  examples: ['idcard'],
  description: 'Créer sa carte d\'identité!',
  options: [
    {
      name: 'race',
      description: 'Entre ta race',
      type: 'STRING',
      required: true,
    },
    {
      name: 'galaxie-exploitée',
      description: 'Entre ta galaxie',
      type: 'STRING',
      required: true,
    },
    {
      name: 'profession',
      description: 'Entre ta profession',
      type: 'STRING',
      required: true,
    },
    {
      name: 'plateforme',
      description: 'Choisis ta plateforme de jeu',
      type: 'STRING',
      required: true,
      choices: [
        {
          name: 'PC',
          value: 'PC',
        },
        {
          name: 'Playstation',
          value: 'PS',
        },
        {
          name: 'Xbox',
          value: 'XBOX',
        },
      ]
    },
    {
      name: 'grade',
      description: 'Choisis ton grade',
      type: 'STRING',
      required: true,
    },
    {
      name: 'code-ami-nms',
      description: 'Entre ton code ami NMS, met des - entre les numéros',
      type: 'STRING',
      required: true,
    },
    {
      name: 'spécialité',
      description: 'Choisis ta spécialité',
      type: 'STRING',
      required: false,
      choices: [
        {
          name: 'Artilleur',
          value: 'Artilleur',
        },
        {
          name: 'Ingenieur',
          value: 'Ingenieur',
        },
        {
          name: 'Soutien',
          value: 'Soutien',
        },
        {
          name: 'Eclaireur',
          value: 'Eclaireur',
        },
      ]
    },
    {
      name: 'nom-de-code',
      description: 'Entre ton nom de code si Lieutenant',
      type: 'STRING',
      required: false,
    },
    {
      name: 'chapter',
      description: 'Entre le nom de ton chapter si Maître de l\'ombre',
      type: 'STRING',
      required: false,
    },
    {
      name: 'biographie-ligne-1',
      description: 'Entre ta biographie, 55 caractères Max par ligne , - si vide',
      type: 'STRING',
      required: false,
    },
    {
      name: 'biographie-ligne-2',
      description: 'Entre ta biographie, 55 caractères Max par ligne , - si vide',
      type: 'STRING',
      required: false,
    },
    {
      name: 'biographie-ligne-3',
      description: 'Entre ta biographie, 55 caractères Max par ligne , - si vide',
      type: 'STRING',
      required: false,
    },
    {
      name: 'biographie-ligne-4',
      description: 'Entre ta biographie, 55 caractères Max par ligne , - si vide',
      type: 'STRING',
      required: false,
    },
    {
      name: 'biographie-ligne-5',
      description: 'Entre ta biographie, 55 caractères Max par ligne , - si vide',
      type: 'STRING',
      required: false,
    },
    {
      name: 'biographie-ligne-6',
      description: 'Entre ta biographie, 55 caractères Max par ligne , - si vide',
      type: 'STRING',
      required: false,
    },
    {
      name: 'biographie-ligne-7',
      description: 'Entre ta biographie, 55 caractères Max par ligne , - si vide',
      type: 'STRING',
      required: false,
    },
    {
      name: 'biographie-ligne-8',
      description: 'Entre ta biographie, 55 caractères Max par ligne , - si vide',
      type: 'STRING',
      required: false,
    },
    {
      name: 'biographie-ligne-9',
      description: 'Entre ta biographie, 55 caractères Max par ligne , - si vide',
      type: 'STRING',
      required: false,
    },
    {
      name: 'biographie-ligne-10',
      description: 'Entre ta biographie, 55 caractères Max par ligne , - si vide',
      type: 'STRING',
      required: false,
    },
    {
      name: 'biographie-ligne-11',
      description: 'Entre ta biographie, 55 caractères Max par ligne , - si vide',
      type: 'STRING',
      required: false,
    },
    {
      name: 'biographie-ligne-12',
      description: 'Entre ta biographie, 55 caractères Max par ligne , - si vide',
      type: 'STRING',
      required: false,
    },
    {
      name: 'biographie-ligne-13',
      description: 'Entre ta biographie, 55 caractères Max par ligne , - si vide',
      type: 'STRING',
      required: false,
    },
    {
      name: 'biographie-ligne-14',
      description: 'Entre ta biographie, 55 caractères Max par ligne , - si vide',
      type: 'STRING',
      required: false,
    },
    {
      name: 'biographie-ligne-15',
      description: 'Entre ta biographie, 55 caractères Max par ligne , - si vide',
      type: 'STRING',
      required: false,
    },
  ],
  async runInteraction(client, interaction, memberSettings) {
    const IdCards = ('991146270318141520');

    if (interaction.channelId !== IdCards)return interaction.reply({ content:'Cette commande doit être initialisée dans le salon <#991146270318141520>!**', ephemeral: true });

    interaction.reply({content: '*--- Compilation des données en cours, patientes un instant! ---*'})

    const Race = interaction.options.getString('race');
    const Galaxie = interaction.options.getString('galaxie-exploitée');
    const Profession = interaction.options.getString('profession');
    const Grade = interaction.options.getString('grade');
    const Spécialité = interaction.options.getString('spécialité');
    const Biographie1 = interaction.options.getString('biographie-ligne-1');
    const Biographie2 = interaction.options.getString('biographie-ligne-2');
    const Biographie3 = interaction.options.getString('biographie-ligne-3');
    const Biographie4 = interaction.options.getString('biographie-ligne-4');
    const Biographie5 = interaction.options.getString('biographie-ligne-5');
    const Biographie6 = interaction.options.getString('biographie-ligne-6');
    const Biographie7 = interaction.options.getString('biographie-ligne-7');
    const Biographie8 = interaction.options.getString('biographie-ligne-8');
    const Biographie9 = interaction.options.getString('biographie-ligne-9');
    const Biographie10 = interaction.options.getString('biographie-ligne-10');
    const Biographie11 = interaction.options.getString('biographie-ligne-11');
    const Biographie12 = interaction.options.getString('biographie-ligne-12');
    const Biographie13 = interaction.options.getString('biographie-ligne-13');
    const Biographie14 = interaction.options.getString('biographie-ligne-14');
    const Biographie15 = interaction.options.getString('biographie-ligne-15');
    const CodeAmiNMS = interaction.options.getString('code-ami-nms');
    const NomDeCode = interaction.options.getString('nom-de-code');
    const Chapter = interaction.options.getString('chapter');
    const Plateforme = interaction.options.getString('plateforme');
      
    const canvas = createCanvas(1200, 1600);
    const ctx = canvas.getContext("2d");
    const background = await loadImage("https://zupimages.net/up/22/26/yagy.png");
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    
    ctx.textAlign = "center"
    ctx.fillStyle = "#F5C617"
    ctx.font = "30px Arial"
    ctx.fillText("ID Card Black Squadron", 560, 150);
    ctx.textAlign = "left"
    ctx.fillStyle = "#F5C617"
    ctx.font = "30px Arial"
    ctx.fillText('Nom:', 200, 630);
    ctx.fillStyle = "#fff"
    ctx.font = "30px Arial"
    ctx.fillText(interaction.member.user.tag, 300, 630);
    ctx.fillStyle = "#F5C617"
    ctx.font = "30px Arial"
    ctx.fillText('Race:', 200, 660);
    ctx.fillStyle = "#fff"
    ctx.font = "30px Arial"
    ctx.fillText(Race, 300, 660);
    ctx.fillStyle = "#F5C617"
    ctx.font = "30px Arial"
    ctx.fillText('Galaxie exploitée:', 200, 690);
    ctx.fillStyle = "#fff"
    ctx.font = "30px Arial"
    ctx.fillText(Galaxie, 460, 690);
    ctx.fillStyle = "#F5C617"
    ctx.font = "30px Arial"
    ctx.fillText('Profession:', 200, 720);
    ctx.fillStyle = "#fff"
    ctx.font = "30px Arial"
    ctx.fillText(Profession, 370, 720);
    ctx.fillStyle = "#F5C617"
    ctx.font = "30px Arial"
    ctx.fillText('Nom de code:', 200, 780);
    ctx.fillStyle = "#fff"
    ctx.font = "30px Arial"
    ctx.fillText(NomDeCode, 405, 780);
    ctx.fillStyle = "#F5C617"
    ctx.font = "30px Arial"
    ctx.fillText('Grade:', 200, 810);
    ctx.fillStyle = "#fff"
    ctx.font = "30px Arial"
    ctx.fillText(Grade, 310, 810);
    ctx.fillStyle = "#F5C617"
    ctx.font = "30px Arial"
    ctx.fillText('Spécialiste:', 200, 840);
    ctx.fillStyle = "#fff"
    ctx.font = "30px Arial"
    ctx.fillText(Spécialité, 370, 840);
    ctx.fillStyle = "#F5C617"
    ctx.font = "30px Arial"
    ctx.fillText('Chapter:', 200, 870);
    ctx.fillStyle = "#fff"
    ctx.font = "30px Arial"
    ctx.fillText(Chapter, 335, 870);
    ctx.fillStyle = "#F5C617"
    ctx.font = "30px Arial"
    ctx.fillText('Biographie:', 200, 930);
    ctx.fillStyle = "#fff"
    ctx.font = "30px Arial"
    ctx.fillText(Biographie1, 200, 990);
    ctx.fillText(Biographie2, 200, 1020);
    ctx.fillText(Biographie3, 200, 1050);
    ctx.fillText(Biographie4, 200, 1080);
    ctx.fillText(Biographie5, 200, 1110);
    ctx.fillText(Biographie6, 200, 1140);
    ctx.fillText(Biographie7, 200, 1170);
    ctx.fillText(Biographie8, 200, 1200);
    ctx.fillText(Biographie9, 200, 1230);
    ctx.fillText(Biographie10, 200, 1260);
    ctx.fillText(Biographie11, 200, 1290);
    ctx.fillText(Biographie12, 200, 1320);
    ctx.fillText(Biographie13, 200, 1350);
    ctx.fillText(Biographie14, 200, 1380);
    ctx.fillText(Biographie15, 200, 1410);
    ctx.fillStyle = "#F5C617"
    ctx.font = "35px Arial"
    ctx.fillText(`${Plateforme}`, 390, 1480)
    ctx.fillStyle = "#fff"
    ctx.font = "35px Arial"
    ctx.fillText(`${CodeAmiNMS}`, 500, 1480);

    

    ctx.arc(600, 380, 174, 0, Math.PI * 2, true);
    ctx.lineWidth = 6;
    ctx.strokeStyle = "#F5C617";
    ctx.stroke();
    ctx.closePath();
    ctx.clip();
    const avatar = await loadImage(interaction.member.user.displayAvatarURL({ format: "jpg"}));
    ctx.drawImage(avatar, 420, 205, 360, 360);

    const attachment = new MessageAttachment(canvas.toBuffer(), "idcard.png");
    await interaction.editReply({content:' ',files: [attachment]});
  },
};