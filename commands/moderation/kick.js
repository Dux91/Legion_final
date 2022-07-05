module.exports = {
  name: 'kick',
  category: 'moderation',
  permissions: ['KICK_MEMBERS'],
  ownerOnly: false,
  usage: 'kick [@member] [reason]',
  examples: ['kick @Dux raison '],
  description: 'kick un utilisateur en indiquant la raison!',
  async run(client, message, args) { 
    if (!args[0]) return message.reply('Spécifie un membre à kick!');
    if (!args[1]) return message.reply('Spécifie la raison du kick!');

    const target = message.mentions.members.find(m => m.id);
    const reason = args.slice(1).join(' ');

    if (!target.kickable) return message.reply('Je ne peu pas kicker ce membre!');

    target.kick(reason);
    message.channel.send(`Le membre ${target} a bien été kick!`);

   },
  options: [
     {
        name: 'target',
        description: 'L\'utilisateur à kicker',
        type: 'USER',
        required: true,
     },
     {
        name: 'reason',
        description: 'La raison du kick',
        type: 'STRING',
        required: true,
     }
  ],
  async runInteraction(client, interaction) { 
    const target = interaction.options.getMember('target');
    const reason = interaction.options.getString('reason');

    if (!target.kickable) return interaction.reply('Je ne peu pas kicker ce membre!');

    target.kick(reason);
    interaction.reply(`Le membre ${target} a bien été kick!`);

   }
};