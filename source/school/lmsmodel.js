"use strict";
exports.__esModule = true;
exports.LMSModel = void 0;
var LMSModel = /** @class */ (function () {
    function LMSModel() {
        this.subjects = new Map();
    }
    LMSModel.prototype.add = function (subject) {
        this.subjects.set(subject.id, subject);
        return true;
    };
    LMSModel.prototype.remove = function (subject) {
        if (!this.subjects.has(subject.id)) {
            throw Error('the subject with this ID does not exist');
        }
        else {
            this.subjects["delete"](subject.id);
        }
    };
    LMSModel.prototype.readAll = function () {
        return [this.subjects];
    };
    LMSModel.prototype.verify = function (subject) {
        if (this.subjects.has(subject.id)) {
            return true;
        }
        else {
            return false;
        }
    };
    return LMSModel;
}());
exports.LMSModel = LMSModel;
