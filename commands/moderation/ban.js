module.exports = {
  name: 'ban',
  category: 'moderation',
  permissions: ['BAN_MEMBERS'],
  ownerOnly: false,
  usage: 'ban [@member] [reason]',
  examples: ['ban @Dux raison '],
  description: 'bannir un utilisateur en indiquant la raison!',
  async run(client, message, args) { 
    if (!args[0]) return message.reply('Spécifie un membre à bannir!');
    if (!args[1]) return message.reply('Spécifie la raison du ban!');

    const target = message.mentions.members.find(m => m.id);
    const reason = args.slice(1).join(' ');

    if (!target.bannable) return message.reply('Je ne peu pas bannir ce membre!');

    target.ban({ reason });
    message.channel.send(`Le membre ${target} a bien été ban!`);

   },
  options: [
     {
        name: 'target',
        description: 'L\'utilisateur à bannir',
        type: 'USER',
        required: true,
     },
     {
        name: 'reason',
        description: 'La raison du ban',
        type: 'STRING',
        required: true,
     }
  ],
  async runInteraction(client, interaction) { 
    const target = interaction.options.getMember('target');
    const reason = interaction.options.getString('reason');

    if (!target.bannable) return interaction.reply('Je ne peu pas bannir ce membre!');

    target.ban({ reason });
    interaction.reply(`Le membre ${target} a bien été ban!`);

   }
};