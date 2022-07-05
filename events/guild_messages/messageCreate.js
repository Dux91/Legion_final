const prefix = '!';
const ownerId = [
  '682745227924340739',
  '789215824912580648'
];

module.exports = {
  name: 'messageCreate',
  once: false,
  async execute(client, message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    let memberSettings = await client.getMember(message.member);

    if (!memberSettings) {
      await client.createMember(message.member);
      memberSettings = await client.getMember(message.member);
    }
    
    let guildSettings = await client.getGuild(message.guild);

    if (!guildSettings) {
      await client.createGuild(message.guild);
      guildSettings = await client.getGuild(message.guild);
      return message.reply('Legion à mis à jour la base de donnée pour ton serveur, retapes la commande!')
    }

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmdName = args.shift().toLowerCase();
    if(cmdName.length == 0) return;

    let cmd = client.commands.get(cmdName);
    if (!cmd) return message.reply('Cette commande n\'existe pas!');

    if (cmd.ownerOnly) {
      if (!ownerId.includes(message.author.id)) return message.reply('Seul Dux peut taper cette commande! Petit.')
    }

    if (!message.member.permissions.has([cmd.permissions])) return message.reply(`Tu n'as pas la/les permission(s) requise(s) (\`${cmd.permissions.join(', ')}\`) pour taper cette commande le bleu!`)

    if (cmd) cmd.run(client, message, args, memberSettings, guildSettings);
  },
};