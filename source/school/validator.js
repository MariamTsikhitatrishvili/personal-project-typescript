"use strict";
exports.__esModule = true;
exports.Validator = void 0;
var Validator = /** @class */ (function () {
    function Validator() {
    }
    Validator.validator = function (object) {
        if (object.sex !== 'male' && object.sex !== 'female') {
            throw new Error('sex must be female or male');
        }
        var re = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
        if (re.test(object.dateOfBirth) === false) {
            throw new Error("Not right Format");
        }
    };
    return Validator;
}());
exports.Validator = Validator;
