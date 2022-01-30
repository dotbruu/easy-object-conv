"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.snakeToCamel = exports.camelToSnake = void 0;
const services_1 = require("./services");
function camelToSnake(object) {
    const formattingMethod = (key) => {
        return key.replace(/([A-Z])/g, function ($1) {
            return `_${$1.toLowerCase()}`;
        });
    };
    return (0, services_1.mapper)(object, formattingMethod, camelToSnake);
}
exports.camelToSnake = camelToSnake;
function snakeToCamel(object) {
    const formattingMethod = (key) => {
        return key.replace(/(\_\w)/g, function (k) {
            return k[1].toUpperCase();
        });
    };
    return (0, services_1.mapper)(object, formattingMethod, snakeToCamel);
}
exports.snakeToCamel = snakeToCamel;
