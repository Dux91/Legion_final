const ms = require('ms');

module.exports = {
  name: 'mute',
  category: 'moderation',
  permissions: ['MODERATE_MEMBERS'],
  ownerOnly: false,
  usage: 'mute [@member] [duration] [reason]',
  examples: ['mute @Dux 4 minutes raison '],
  description: 'mute un utilisateur temporairement en indiquant la raison!',
  async run(client, message, args) { 
    if (!args[0]) return message.reply('Spécifie un membre à mute!');
    if (!args[1] || !args[2]) return message.reply('Spécifie une durée de mute!');
    if (!args[3]) return message.reply('Spécifie une raison!');

    const target = message.mentions.members.find(m => m.id);
    const duration = args.slice(1, 3).join(' ');
    const convertedTime = ms(duration);
    const reason = args.slice(3).join(' ');

    if (!target.moderatable) return message.reply('Je ne peu pas mute ce membre!');
    if (!convertedTime) return message.reply('Spécifie une durée valable!');

    target.timeout(convertedTime, reason);
    message.channel.send(`Le membre ${target} a bien été mute pour ${duration} car ${reason}!`);

   },
  options: [
    {
      name: 'target',
      description: 'L\'utilisateur à mute',
      type: 'USER',
      required: true,
    },
    {
      name: 'duration',
      description: 'La durée du mute',
      type: 'STRING',
      required: true,
    },
    {
      name: 'reason',
      description: 'La raison du mute',
      type: 'STRING',
      required: true,
    }
  ],
  async runInteraction(client, interaction) { 
    const target = interaction.options.getMember('target');
    const duration = interaction.options.getString('duration');
    const convertedTime = ms(duration);
    const reason = interaction.options.getString('reason');

    if (!target.moderatable) return interaction.reply('Je ne peu pas mute ce membre!');
    if (!convertedTime) return interaction.reply('Spécifie une durée valable!');

    target.timeout(convertedTime, reason);
    interaction.reply(`Le membre ${target} a bien été mute pour ${duration} car ${reason}!`);

  }
};