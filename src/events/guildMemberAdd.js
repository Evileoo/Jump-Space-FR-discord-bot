import { Events } from 'discord.js';

// Executed when bot is ready
export const event = {
    name: Events.GuildMemberAdd,
    async execute(member){

        console.log(member);
        console.log(member.user.id);
        
        const joinMessages = [
            `Un atiran a été retrouvé, bon retour parmis nous <@${member.user.id}>`,
            `<@${member.user.id}> est rentré de mission`,
            `Les sentinelles ont laissé passer <@${member.user.id}>, il pourra nous aider maintenant`,
            `L'odeur de pizza a attiré <@${member.user.id}>, régale-toi :pizza:`,
            `<@${member.user.id}> nous fait la livraison hebdomadaire d'ananas, merci à toi`,
            `Le vaisseau de <@${member.user.id}> est bien ammoché, laisse-nous le réparer et installe-toi ici`,
            `On m'a dit que <@${member.user.id}> était un excellent cuisinier, on espère qu'il saura faire autre chose que des pizzas à l'ananas`,
            `<@${member.user.id}> a été retrouvé en train de dormir dans le vide de l'espace ! Ca c'est une sieste épique`,
            `Un nouvel atiran est prêt à rejoindre la coalition, bienvenue <@${member.user.id}> !`
        ];

        let joinMessage;

        if(Object.hasOwn(member.user, "primaryGuild")) {
            console.log(member.user.primaryGuild.tag);
            switch(member.user.primaryGuild.tag) {
                case "HDFR":
                    joinMessage = `Le ministère de la super vérité approuve l'enrôlement de <@${member.user.id}> par la coalition ! Merci pour ton aide Helldiver !`;
                    break;
                case "AHOY":
                    joinMessage = `<@${member.user.id}> a décidé que la mer ne suffisait plus, maintenant, c'est les ressources de l'espace qui sont convoitées, bon pillage pirate !`;
                    break;
                default:
                    joinMessage = joinMessages[Math.floor(Math.random() * joinMessages.length)];
            }
        } else {
            joinMessage = joinMessages[Math.floor(Math.random() * joinMessages.length)];
        }

        const guild = member.guild;
        const channel = await guild.channels.fetch('1418863969145192521');
        await channel.send(joinMessage);

    }
}