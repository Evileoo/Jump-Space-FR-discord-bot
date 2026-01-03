import { Events } from 'discord.js';

// Executed when bot is ready
export const event = {
    name: Events.GuildMemberRemove,
    async execute(member){

        console.log(member);
        
        const leaveMessages = [
            `${member.user.tag} a été intoxiqué par une pizza à l'ananas`,
            `${member.user.tag} a été oublié par son équipage, les sentinelles l'ont eu`,
            `${member.user.tag} s'est crashé dans un astéroïde`,
            `${member.user.tag} ne s'est pas assis avant le saut dans l'espace`,
            `${member.user.tag} a fait une mauvaise chute`,
            `${member.user.tag} a noclip dans les backrooms`,
            `${member.user.tag} a explosé après avoir mangé une pizza à l'ananas, comment est-ce possible ?`,
            `Il semblerait que le tir allié ait été activé pendant une mission, bref, ${member.user.tag} n'est plus de ce monde`,
            `${member.user.tag} a touché de l'herbe, on ne le reverra plus`,
            `${member.user.tag} a voulu faire un tour de magie où il disparaissait, on ne l'a plus revu depuis`,
            `${member.user.tag} a fait un excès de vitesse, il est dans la case prison`,
            `${member.user.tag} n'a pas aimé la cuisine, faites un effort les pizzaiolos !`
        ];

        const leaveMessage = leaveMessages[Math.floor(Math.random() * joinMessages.length)];

        const guild = member.guild;
        const channel = await guild.channels.fetch('1418863969145192521');
        await channel.send(leaveMessage);

    }
}