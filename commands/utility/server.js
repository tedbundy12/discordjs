const { SlashCommandBuilder, EmbedBuilder, userMention } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Показать ваш ID'),
    async execute(interaction) {
        const userID = interaction.user.id;

		const avatarURL = interaction.guild.iconURL({ dynamic: true, format: 'png', size: 4096 });
		const user = userMention()
		
		const error = new EmbedBuilder()
		.setTitle('Ошибка')
		.setDescription(`У сервера нет аватарки!`)
		.setColor('#ff00ff')
        
		if (!avatarURL) {
            return interaction.reply({embeds: [error]});
        }
        const embed = new EmbedBuilder()
            .setTitle('Информация о сервере')
			.setImage(avatarURL)
            .setDescription(`${user.toString()} Название сервера - **${interaction.guild.name}** \nКоличество участников - **${interaction.guild.memberCount}**`)
            .setColor('#0099ff');

        await interaction.reply({ embeds: [embed] });
    },
};