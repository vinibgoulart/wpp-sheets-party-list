"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _i18n = require("i18n");
const howItWorksMessage = (msg)=>{
    msg.reply(`${(0, _i18n.__)("This is a bot for you to create the integration of the excel list of your party's guests with the whatsapp group")}

${(0, _i18n.__)("You can only have one list in progress per group, if there is a list in progress it will be displayed in the title of the group *In Progress*")}

${(0, _i18n.__)("You can look up commands on sheets using `!help`")}

${(0, _i18n.__)("When a list is in progress, all messages sent in the group will be sent to excel, so it is recommended that there are no parallel conversations other than names in the group")}

${(0, _i18n.__)("You can submit names in several ways, send `!ie` to see all accepted forms")}

${(0, _i18n.__)("When creating an event, you create it with the *Guests*, *Free* and *Paid* column")}

${(0, _i18n.__)("You can make the bot stop listening for new names by running the `/stop` command, don't forget to call again when you want to send new names")}

${(0, _i18n.__)("All successful operations are reacted by the bot with an emoji, if not, contact whoever is organizing the event to find out the status of the list.")}

${(0, _i18n.__)("All names are accepted and formatted for capital case, in addition to being automatically organized in alphabetical order")}`);
    msg.react("👍");
};
const _default = howItWorksMessage;
