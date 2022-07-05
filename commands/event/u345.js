module.exports = {
  name: 'u345',
  category: 'event',
  permissions: ['SEND_MESSAGES'],
  ownerOnly: false,
  usage: 'u345',
  examples: ['u345'],
  description: '????',
  async runInteraction(client, interaction) {
    const EventLogistic = ('832612595462176828');

    if (interaction.channelId !== EventLogistic)return interaction.reply({ content:'Cette commande doit être initialisée dans le salon <#832612595462176828>!', ephemeral: true });

        
    interaction.reply({ content: `A l’aube de son 7 ème cycle le décompte des 16 pris fin... Et alors que tout le monde préssentait le grand vide et que les ténèbres dévoreraient leur dernier souffle de vie... L’enfant se teint là debout au milieu de la tempête obscure qui engouffrait tout. Les abysses lui faisaient face et il se mit à léviter... Puis une lumière s’échappa de sa bouche... Comme si il hurlait mais sans aucun son...\n\nTemple ABYSS:\n<:1Oiseau:986431108751175690><:0Soleil:986431085439225896><:0Soleil:986431085439225896><:aVoxel:986431317233270784><:fAtlas:986431432459182091><:fAtlas:986431432459182091><:6Bateau:986431223293415435><:0Soleil:986431085439225896><:cTente:986431361890025502><:dFuse:986431386674163824><:1Oiseau:986431108751175690><:5Ballon:986431201705349150>`, ephemeral: true});
  }
};