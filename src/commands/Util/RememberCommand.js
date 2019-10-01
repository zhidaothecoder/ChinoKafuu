const Command = require("../../structures/command")
const ms = require("ms");
module.exports = class RememberCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'remember',
            category: 'util',
            aliases: ['relembrar', "lembrete"],
            UserPermission: null,
            ClientPermission: null,
            OnlyDevs: false,
            hidden: false,
        })
    } 
    execute({message, args, server}, t) {
        
let reminderTime = args[0];
if (!reminderTime) return message.channel.send(t("commands:remember.example"));

let reminder = args.slice(1).join(" ");

let remindEmbed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
    .addField(t("commands:remember.reminder"), `\`\`\`${reminder}\`\`\``)
    .addField(t("commands:remember.time"), `\`\`\`${reminderTime}\`\`\``)
    .setTimestamp();

message.channel.send(remindEmbed);


setTimeout(function() {
    let remindEmbed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
        .addField(t("commands:remember.reminder"), `\`\`\`${reminder}\`\`\``)
        .setTimestamp()

    message.reply(remindEmbed);
}, ms(reminderTime));
   }
}
