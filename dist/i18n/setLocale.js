"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "setLocale", {
    enumerable: true,
    get: function() {
        return setLocale;
    }
});
const _i18n = /*#__PURE__*/ _interop_require_default(require("i18n"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const setLocale = (locale)=>{
    _i18n.default.setLocale(locale);
};
