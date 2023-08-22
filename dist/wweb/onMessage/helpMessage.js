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
const helpMessage = (msg)=>{
    msg.reply(`*Commands:*
*!help*: ${(0, _i18n.__)("Show all commands")}
*!hiw*: ${(0, _i18n.__)("Explanation of how it works")}
*!ie*: ${(0, _i18n.__)("Show name input examples")}
*!sc*: ${(0, _i18n.__)("Create a sheets with Guests and Free columns")}
*!sd*: ${(0, _i18n.__)("See the details of the current sheets")}
*!sf*: ${(0, _i18n.__)("Ends the list, making it possible to start a new one")}

*Managing the group*
*!stop*: ${(0, _i18n.__)("Stop listening to new names")}
*!start*: ${(0, _i18n.__)("Start listening to new names")}
*!free*: ${(0, _i18n.__)("Use replying to a message to add a name to the Free column")}
*!paid*: ${(0, _i18n.__)("Use replying to a message to add a name to the Paid column")}

*Documentation*
https://github.com/vinibgoulart/wpp-sheets-party-list

*_createdBy_*: @vinibgoulart`);
    msg.react("👍");
};
const _default = helpMessage;
