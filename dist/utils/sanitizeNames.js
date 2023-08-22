"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "sanitizeNames", {
    enumerable: true,
    get: function() {
        return sanitizeNames;
    }
});
const sanitizeNames = (input)=>{
    const regex = /^\d+\s*[-]?\s*/; //
    const lines = input.split(/\n|,/);
    const sanitizedNames = [];
    for (let line of lines){
        const sanitizedLine = line.trim().replace(regex, "").replace(/^-\s*/, "");
        if (sanitizedLine.length > 0) {
            sanitizedNames.push(sanitizedLine);
        }
    }
    const uniqueNames = Array.from(new Set(sanitizedNames));
    const formattedNames = uniqueNames.map((name)=>{
        const words = name.toLowerCase().split(" ");
        const capitalizedWords = words.map((word)=>word.charAt(0).toUpperCase() + word.slice(1));
        return capitalizedWords.join(" ");
    });
    return formattedNames.sort();
};
