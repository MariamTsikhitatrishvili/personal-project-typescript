"use strict";
exports.__esModule = true;
exports.GroupsModel = void 0;
var GroupsModel = /** @class */ (function () {
    function GroupsModel() {
        this.groups = new Map();
    }
    GroupsModel.prototype.add = function (room) {
        var id = Math.random().toString(36).substr(2, 8);
        this.groups.set(id, { id: id, room: room, pupils: [] });
        return id;
    };
    GroupsModel.prototype.addPupil = function (groupId, pupil) {
        if (this.groups.has(groupId)) {
            var group = this.groups.get(groupId);
            group.pupils.push(pupil);
            return pupil;
        }
        else {
            throw new Error("there is no such group");
        }
    };
    GroupsModel.prototype.removePupil = function (groupId, pupilid) {
        if (this.groups.has(groupId)) {
            this.groups["delete"](groupId);
        }
        else {
            throw new Error('there is no such group');
        }
    };
    GroupsModel.prototype.update = function (groupId, updated) {
        if (this.groups.has(groupId)) {
            var group = this.groups.get(groupId);
            group.room = updated.room;
        }
        else {
            throw new Error("There is no such group");
        }
    };
    GroupsModel.prototype.read = function (groupId) {
        if (this.groups.has(groupId)) {
            return this.groups;
        }
        else {
            throw new Error('there is no such group');
        }
    };
    GroupsModel.prototype.readAll = function () {
        if (arguments.length > 0) {
            throw new Error("readall must't have parameter");
        }
        else {
            return Array.from(this.groups);
        }
    };
    return GroupsModel;
}());
exports.GroupsModel = GroupsModel;
