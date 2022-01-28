"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.snakeCaseToCamelCase = exports.camelCaseToSnakeCase = void 0;
function camelCaseToSnakeCase(object) {
    if (typeof object != "object")
        return object;
    for (const oldName in object) {
        const newName = oldName.replace(/([A-Z])/g, function ($1) {
            return `_${$1.toLowerCase()}`;
        });
        if (newName != oldName) {
            if (object.hasOwnProperty(oldName)) {
                object[newName] = object[oldName];
                delete object[oldName];
            }
        }
        if (typeof object[newName] == "object") {
            object[newName] = camelCaseToSnakeCase(object[newName]);
        }
    }
    return object;
}
exports.camelCaseToSnakeCase = camelCaseToSnakeCase;
function snakeCaseToCamelCase(object) {
    if (typeof object != "object")
        return object;
    for (const oldName in object) {
        const newName = oldName.replace(/(\_\w)/g, function (k) {
            return k[1].toUpperCase();
        });
        if (newName != oldName) {
            if (object.hasOwnProperty(oldName)) {
                object[newName] = object[oldName];
                delete object[oldName];
            }
        }
        if (typeof object[newName] == "object") {
            object[newName] = snakeCaseToCamelCase(object[newName]);
        }
    }
    return object;
}
exports.snakeCaseToCamelCase = snakeCaseToCamelCase;
