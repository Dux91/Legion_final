module.exports = {
  name: 'asura',
  category: 'event',
  permissions: ['SEND_MESSAGES'],
  ownerOnly: false,
  usage: 'asura',
  examples: ['asura'],
  description: '????',
  async runInteraction(client, interaction) {
    const EventLogistic = ('832612595462176828');

    if (interaction.channelId !== EventLogistic)return interaction.reply({ content:'Cette commande doit être initialisée dans le salon <#832612595462176828>!', ephemeral: true });

        
    interaction.reply({ content: `Asura était une entitée Korvax scientifique qui combattait les Abysses il y a déjà plusieurs cycles, accompagné de son équipage, il s'était donné pour but de refermer les failles abyssales une à une. Il était le premier **Maître de l\'ombre**! Mais lors d'une tentative de trop son équipage le trahis et ils le poussèrent dans la faille, perdu depuis tout ce temps, son âme dématerialisée, il réussit à parasiter une autre entitée Korvax qui avait chutté dans une faille, et se donnait à présent le nom de **LEGION**!`, ephemeral: true});
  }
};