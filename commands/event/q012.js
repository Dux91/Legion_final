module.exports = {
  name: 'q012',
  category: 'event',
  permissions: ['SEND_MESSAGES'],
  ownerOnly: false,
  usage: 'q012',
  examples: ['q012'],
  description: '????',
  async runInteraction(client, interaction) {
    const EventLogistic = ('832612595462176828');

    if (interaction.channelId !== EventLogistic)return interaction.reply({ content:'Cette commande doit être initialisée dans le salon <#832612595462176828>!', ephemeral: true });

        
    interaction.reply({ content: `En un temps chaotique et sombre, où la lumière rouge mourrait et était sur le point de s’éteindre... Laissant place à l’obscurité et aux abysses, un enfant qui n’avait pas de lien de sang fut déposé dans une colonie paisible, cet enfant en grandissant était de plus en plus dur et froid... Les autres autour de lui gardaient leur distances.\n\nTemple ATLAS:\n<:1Oiseau:986431108751175690><:1Oiseau:986431108751175690><:bPoisson:986431338393522226><:eArbre:986431410149679104><:fAtlas:986431432459182091><:fAtlas:986431432459182091><:6Bateau:986431223293415435><:0Soleil:986431085439225896><:cTente:986431361890025502><:dFuse:986431386674163824><:1Oiseau:986431108751175690><:5Ballon:986431201705349150>`, ephemeral: true});
  }
};