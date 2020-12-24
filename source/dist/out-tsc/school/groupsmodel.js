export class GroupsModel {
    constructor() {
        this.groups = new Map();
    }
    add(room) {
        let id = Math.floor(Math.random() * 1000);
        this.groups.set(id, {
            id,
            room,
            pupils: [],
            groupId: id,
        });
        return id;
    }
    addPupil(groupId, pupil) {
        if (typeof groupId === "string" && typeof pupil === "object") {
            if (this.groups.get(groupId) == groupId) {
                let group = this.groups.get(groupId);
                group.pupils.push(pupil);
                return this.groups;
            }
        }
    }
    removePupil(groupId, pupilid) {
        if (typeof groupId === "string" && typeof pupilid === "number") {
            if (this.groups.get(groupId) == groupId) {
                const group = this.groups.get(groupId);
                return group.pupils.pop();
            }
            else
                throw new Error("there are not such group");
        }
        else
            throw new Error("parameters aren't valid");
    }
    update(groupId, updated) {
        if (typeof groupId === "string" && typeof updated === "object") {
            if (this.groups.get(groupId) == groupId) {
                const group = this.groups.get(groupId);
                group.room = updated.room;
                ;
            }
            else
                throw new Error("there are not such group");
        }
        else
            throw new Error("parameters aren't valid");
    }
    read(groupId) {
        if (typeof groupId === "string") {
            if (this.groups.get(groupId) == groupId)
                return { groupId };
            else
                throw new Error("there are not such group");
        }
        else
            throw new Error("parameters aren't valid");
    }
    readAll() {
        if (arguments.length > 0) {
            throw new Error("readall must't have parameter");
        }
        else {
            return Array.from(this.groups);
        }
    }
}
//# sourceMappingURL=groupsmodel.js.map