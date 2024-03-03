const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('id')
    .setDescription('Show your Account ID'),
    async execute(interaction){
        const userID = interaction.user.id
        await interaction.reply(`Твой айди - **${userID}**`)
    }
}