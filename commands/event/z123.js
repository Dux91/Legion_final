module.exports = {
  name: 'z123',
  category: 'event',
  permissions: ['SEND_MESSAGES'],
  ownerOnly: false,
  usage: 'z123',
  examples: ['z123'],
  description: '????',
  async runInteraction(client, interaction) {
    const EventLogistic = ('832612595462176828');

    if (interaction.channelId !== EventLogistic)return interaction.reply({ content:'Cette commande doit être initialisée dans le salon <#832612595462176828>!', ephemeral: true });

        
    interaction.reply({ content: `Puis plus rien le grand silence... Le froid... Et une sensation de chaleur, sur le visage d’abord comme une lumière douce et chaude traversant les paupières closes. Leurs yeux s’ouvrirent c’était le matin et leurs souvenirs étaient présents en eux comme si cette fois rien n’avait pris fin. L'enfant portait maintenant le titre d'Enfant de la lumière!\n\nTemple ASURA:\n<:2Visage:986431128258883594><:1Oiseau:986431108751175690><:cTente:986431361890025502><:fAtlas:986431432459182091><:fAtlas:986431432459182091><:fAtlas:986431432459182091><:6Bateau:986431223293415435><:0Soleil:986431085439225896><:cTente:986431361890025502><:dFuse:986431386674163824><:1Oiseau:986431108751175690><:4Eclipse:986431177437102110>`, ephemeral: true});
  }
};