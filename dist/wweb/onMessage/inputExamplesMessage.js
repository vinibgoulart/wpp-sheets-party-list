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
const inputExamplesMessage = (msg)=>{
    msg.reply(`${(0, _i18n.__)("Names separated by commas")}:
*Vinicius Goulart, Joao, Maria, pedro, Paula*

${(0, _i18n.__)("Names separated by line breaks")}:
*Vinicius Goulart*
*Joao*
*Maria*
*pedro*
*Paula*

${(0, _i18n.__)("Names with a hyphen or number at the beginning")}:
*1- Vinicius Goulart*
*2 Joao*
*3-Maria*
*4 pedro*
*- Paula*
      
${(0, _i18n.__)("All names are accepted and formatted for capital case, in addition to being automatically organized in alphabetical order")}`);
    msg.react("👍");
};
const _default = inputExamplesMessage;
