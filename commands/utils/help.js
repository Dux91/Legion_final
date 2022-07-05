const { MessageEmbed } = require('discord.js');
const { readdirSync } = require('fs');
const commandFolder = readdirSync('./commands');
const prefix = '/';

const contextDescription = {
  userinfo : 'Renvoie des informations sur l\'utilisateur'
}

module.exports = {
  name: 'help',
  category: 'utils',
  permissions: ['SEND_MESSAGES'],
  ownerOnly: false,
  usage: 'help <command>',
  examples: ['help', 'help ping', 'help emit'],
  description: 'Renvoie une liste de commandes filtrées par catégories',
  async run(client, message, args) {
    if (!args.length) {
      const noArgsEmbed = new MessageEmbed()
        .setColor('#000000')
        .addField('Liste des commandes', `une liste de toutes les catégories disponibles et leurs commandes.\nPour plus d'informations sur une commande, tapes \`${prefix}help <command>\``)
      
      for (const category of commandFolder) {
        noArgsEmbed.addField(
          `-> ${category.replace(/(^\w|\s\w)/g, firstLetter => firstLetter.toUpperCase())}`,
          `\`${client.commands.filter(cmd => cmd.category == category.toLowerCase()).map(cmd => cmd.name).join(', ')}\``
        );
      }

      return message.channel.send({ embeds: [noArgsEmbed] });
    }

    const cmd = client.commands.get(args[0]);
    if (!cmd) return message.reply('Cette commande n\'existe pas, essaye encore!');
    
    return message.channel.send(`
\`\`\`makefile
[Help: commande -> ${cmd.name}] ${cmd.ownerOnly ? '/!\\ Pour Dux uniquement /!\\' : ''}

${cmd.description ? cmd.description : contextDescription[`${cmd.name}`]}

Utilisation: ${prefix}${cmd.usage}
Exemples: ${prefix}${cmd.examples.join(` | ${prefix}`)}
Permissions: ${cmd.permissions.join(', ')}

---

${prefix} = prefix utilisé pour le BOT
{} = Sous-commande(s) disponible(s) | [] option(s) obligatoire(s) | <> option(s) facultative(s)
Ne pas inclure ces caractères -> {}, [] et <> dans tes commandes!
\`\`\``);
  },
  options: [
    {
      name: 'command',
      description: 'Tapes le nom de ta commande.',
      type: 'STRING',
      required: false,
    }
  ],
  async runInteraction(client, interaction) { 
    const cmdName = interaction.options.getString('command');

    if (!cmdName) {
      const noArgsEmbed = new MessageEmbed()
        .setColor('#000000')
        .addField('Liste des commandes', `une liste de toutes les catégories disponibles et leurs commandes.\nPour plus d'informations sur une commande, tapes \`/help <command>\``)
      
      for (const category of commandFolder) {
        noArgsEmbed.addField(
          `-> ${category.replace(/(^\w|\s\w)/g, firstLetter => firstLetter.toUpperCase())}`,
          `\`${client.commands.filter(cmd => cmd.category == category.toLowerCase()).map(cmd => cmd.name).join(', ')}\``
        );
      }

      return interaction.reply({ embeds: [noArgsEmbed], ephemeral: true });
    }

    const cmd = client.commands.get(cmdName);
    if (!cmd) return interaction.reply({ content: 'Cette commande n\'existe pas, essaye encore!', ephemeral: true });

    return interaction.reply({ content: `
\`\`\`makefile
[Help: commande -> ${cmd.name}] ${cmd.ownerOnly ? '/!\\ Pour Dux uniquement /!\\' : ''}

${cmd.description ? cmd.description : contextDescription[`${cmd.name}`]}

Utilisation: ${prefix}${cmd.usage}
Exemples: ${prefix}${cmd.examples.join(` | ${prefix}`)}
Permissions: ${cmd.permissions.join(', ')}

---

${prefix} = prefix utilisé pour le BOT
{} = Sous-commande(s) disponible(s) | [] option(s) obligatoire(s) | <> option(s) facultative(s)
Ne pas inclure ces caractères -> {}, [] et <> dans tes commandes!
\`\`\``, ephemeral: true });
   }     
};