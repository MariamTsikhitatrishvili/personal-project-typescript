"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.TeachersModel = void 0;
var validator_1 = require("./validator");
var TeachersModel = /** @class */ (function () {
    function TeachersModel() {
        this.teachers = new Map();
        this.id = Math.floor(Math.random() * 100000000);
    }
    TeachersModel.prototype.add = function (teacher) {
        validator_1.Validator.validator(teacher);
        var id = Math.floor(Math.random() * 1000);
        teacher.id = id;
        this.teachers.set(id, teacher);
        return id;
    };
    TeachersModel.prototype.read = function (teacherId) {
        if (!this.teachers.has(teacherId)) {
            throw new Error('there is no such teacher');
        }
        else {
            var teach = this.teachers.get(teacherId);
            return __assign({ teacherId: teacherId }, teach);
        }
    };
    TeachersModel.prototype.remove = function (teacherId) {
        if (!this.teachers.has(teacherId)) {
            throw Error('the teacher with this ID does not exist');
        }
        else {
            this.teachers["delete"](teacherId);
        }
    };
    TeachersModel.prototype.update = function (teacherId, updatedProfile) {
        validator_1.Validator.validator(updatedProfile);
        var teach = this.teachers.get(teacherId);
        Object.assign(teach, updatedProfile);
        return teacherId;
    };
    return TeachersModel;
}());
exports.TeachersModel = TeachersModel;
