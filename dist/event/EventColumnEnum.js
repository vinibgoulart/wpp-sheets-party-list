"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    EVENT_COLUMN_ENUM: function() {
        return EVENT_COLUMN_ENUM;
    },
    EVENT_COLUMN_DESCRIPTION_ENUM: function() {
        return EVENT_COLUMN_DESCRIPTION_ENUM;
    },
    EVENT_COLUMN_POSITION_ENUM: function() {
        return EVENT_COLUMN_POSITION_ENUM;
    }
});
var EVENT_COLUMN_ENUM;
(function(EVENT_COLUMN_ENUM) {
    EVENT_COLUMN_ENUM["GUEST"] = "GUEST";
    EVENT_COLUMN_ENUM["FREE"] = "FREE";
    EVENT_COLUMN_ENUM["PAID"] = "PAID";
})(EVENT_COLUMN_ENUM || (EVENT_COLUMN_ENUM = {}));
const EVENT_COLUMN_DESCRIPTION_ENUM = {
    [EVENT_COLUMN_ENUM.GUEST]: "Guest",
    [EVENT_COLUMN_ENUM.FREE]: "Free",
    [EVENT_COLUMN_ENUM.PAID]: "Paid"
};
const EVENT_COLUMN_POSITION_ENUM = {
    [EVENT_COLUMN_ENUM.GUEST]: "A",
    [EVENT_COLUMN_ENUM.FREE]: "B",
    [EVENT_COLUMN_ENUM.PAID]: "C"
};
