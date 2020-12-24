"use strict";
exports.__esModule = true;
exports.PupilsModel = void 0;
var validator_1 = require("./validator");
;
var PupilsModel = /** @class */ (function () {
    function PupilsModel() {
        this.pupils = new Map();
        this.id = Math.floor(Math.random() * 100000000);
    }
    PupilsModel.prototype.add = function (pupil) {
        validator_1.Validator.validator(pupil);
        var id = Math.floor(Math.random() * 1000);
        pupil.id = id;
        this.pupils.set(id, pupil);
        return this.pupils.get(id);
    };
    PupilsModel.prototype.read = function (pupilid) {
        if (!this.pupils.has(pupilid)) {
            throw new Error('there is no such pupil');
        }
        else {
            return this.pupils.get(pupilid);
        }
    };
    PupilsModel.prototype.update = function (pupilid, updatedProfile) {
        validator_1.Validator.validator(updatedProfile);
        var pupil = this.pupils.get(pupilid);
        Object.assign(pupil, updatedProfile);
    };
    PupilsModel.prototype.remove = function (pupilid) {
        if (!this.pupils.has(pupilid)) {
            throw Error('the pupil with this ID does not exist');
        }
        else {
            this.pupils["delete"](pupilid);
        }
    };
    return PupilsModel;
}());
exports.PupilsModel = PupilsModel;
