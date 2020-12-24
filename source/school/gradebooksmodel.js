"use strict";
exports.__esModule = true;
exports.GradeBooksModel = void 0;
var GradeBooksModel = /** @class */ (function () {
    function GradeBooksModel(groups, teachers, lms) {
        this.grades = new Map();
        this.groups = groups;
        this.teachers = teachers;
        this.lms = lms;
    }
    GradeBooksModel.prototype.add = function (level, gradeid) {
        var id = Math.floor(Math.random() * 1000);
        this.grades.set(id, { level: level, id: id, records: [] });
        return id;
    };
    GradeBooksModel.prototype.clear = function () {
        this.grades.clear();
    };
    GradeBooksModel.prototype.addRecord = function (gradebookId, record) {
        var grade = this.grades.get(gradebookId);
        if (grade) {
            grade.records.push(record);
            return this.grades;
        }
        else {
            throw new Error('Something went wrong');
        }
    };
    GradeBooksModel.prototype.read = function (gradebookId, pupilId) {
        return this.grades;
    };
    GradeBooksModel.prototype.readAll = function (gradebookId) {
        return Array.from(this.grades);
    };
    return GradeBooksModel;
}());
exports.GradeBooksModel = GradeBooksModel;
