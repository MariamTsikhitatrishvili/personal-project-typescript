"use strict";
exports.__esModule = true;
exports.SubjectsModel = void 0;
var SubjectsModel = /** @class */ (function () {
    function SubjectsModel(subjects) {
        this.title = subjects.title;
        this.lessons = subjects.lessons;
        this.description = subjects.description;
        this.id = Math.floor(Math.random() * 1000);
    }
    return SubjectsModel;
}());
exports.SubjectsModel = SubjectsModel;
