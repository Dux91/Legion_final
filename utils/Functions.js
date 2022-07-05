const { Guild, Member} = require("../models");
const Logger = require('./Logger');

module.exports = client => {

  client.getGuild = async guild => {
    const guildData = await Guild.findOne({guildId: guild.id});
    return guildData;
  };

  client.createGuild = async guild => {
    const createGuild = new Guild({guildId: guild.id});
    createGuild.save().then(g => Logger.client(`Nouveau Serveur (${g.guildId})`));
  };

  client.updateGuild = async (guild, settings) => {
    let guildData = await client.getGuild(guild);
    if (typeof guildData != 'object') guildData = {};
    for (const key in settings) {
       if (guildData[key] != settings[key]) guildData[key] = settings[key]
    }
    return guildData.updateOne(settings);
  };

  client.getMember = async member => {
    const memberData = await Member.findOne({userId: member.id});
    return memberData;
  };

  client.createMember = async member => {
    const createMember = new Member({userId: member.id});
    createMember.save().then(u => Logger.client(`Nouveau Membre (${u.userId})`));
  };

  client.updateMember = async (member, settings) => {
    let memberData = await client.getMember(member);
    if (typeof memberData != 'object') memberData = {};
    for (const key in settings) {
       if (memberData[key] != settings[key]) memberData[key] = settings[key]
    }
    return memberData.updateOne(settings);
  };
  
}