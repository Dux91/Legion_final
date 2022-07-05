const ownerId = [
  '682745227924340739',
  '789215824912580648'
];

module.exports = {
  name: 'interactionCreate',
  once: false,
  async execute(client, interaction) {
    let memberSettings = await client.getMember(interaction.member);

    if (!memberSettings) {
      await client.createMember(interaction.member);
      memberSettings = await client.getMember(interaction.member);
    }

    let guildSettings = await client.getGuild(interaction.guild);

    if (!guildSettings) {
      await client.createGuild(interaction.guild);
      guildSettings = await client.getGuild(interaction.guild);
      return interaction.reply('Legion à mis à jour la base de donnée pour ton serveur, retapes la commande!')
    }

    if (interaction.isCommand() || interaction.isContextMenu()) {
      const cmd = client.commands.get(interaction.commandName);
      if (!cmd) return interaction.reply({ content: 'Cette commande n\'existe pas!', ephemeral: true });

      if (cmd.ownerOnly) {
        if (!ownerId.includes(interaction.member.user.id)) return interaction.reply({ content: 'Seul un **Maitre de l\'ombre** peut taper cette commande! Petit.', ephemeral: true })
      }

      if (!interaction.member.permissions.has([cmd.permissions])) return interaction.reply({ content: `Tu n'as pas la/les permission(s) requise(s) (\`${cmd.permissions.join(', ')}\`) pour taper cette commande le bleu!`, ephemeral: true });

      cmd.runInteraction(client, interaction, memberSettings, guildSettings);
    } else if (interaction.isButton()) {
      const btn = client.buttons.get(interaction.customId);
      if (!btn) return interaction.reply({ content: 'Ce bouton n\'existe pas!', ephemeral: true });
      btn.runInteraction(client, interaction, memberSettings, guildSettings);
    } else if (interaction.isSelectMenu()) {
      const selectMenu = client.selects.get(interaction.customId);
      if (!selectMenu) return interaction.reply({ content: 'Ce menu n\'existe pas!', ephemeral: true });
      selectMenu.runInteraction(client, interaction, memberSettings, guildSettings);
    }
  },
};