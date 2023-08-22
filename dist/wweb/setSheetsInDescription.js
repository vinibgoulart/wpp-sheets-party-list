"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "setSheetsInDescription", {
    enumerable: true,
    get: function() {
        return setSheetsInDescription;
    }
});
const setSheetsInDescription = (chat, options)=>{
    if (chat.groupMetadata.desc.includes("*Sheet Details*")) {
        const descriptionWithoutLabel = chat.groupMetadata.desc.split("*Sheet Details*")[0];
        chat.setDescription(`${descriptionWithoutLabel}*Sheet Details*
      *URL*: ${options.sheetsUrl}`);
        return;
    }
    chat.setDescription(`${chat.groupMetadata.desc}
    *Sheet Details*
    *URL*: ${options.sheetsUrl}`);
};
