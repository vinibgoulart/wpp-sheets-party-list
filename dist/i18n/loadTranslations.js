"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "loadTranslations", {
    enumerable: true,
    get: function() {
        return loadTranslations;
    }
});
const _path = /*#__PURE__*/ _interop_require_default(require("path"));
const _i18n = /*#__PURE__*/ _interop_require_default(require("i18n"));
const _setLocale = require("./setLocale");
const _localeEnum = require("./localeEnum");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const loadTranslations = ()=>{
    _i18n.default.configure({
        locales: [
            "en",
            "pt-BR"
        ],
        defaultLocale: "pt-BR",
        directory: _path.default.join(__dirname, "locales"),
        objectNotation: true
    });
    (0, _setLocale.setLocale)(_localeEnum.LOCALE_ENUM.PT_BR);
};
