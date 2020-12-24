export class LMSModel {
    constructor() {
        this.subjects = new Map();
    }
    add(subject) {
        this.subjects.set(subject.id, subject);
        return true;
    }
    remove(subject) {
        if (!this.subjects.has(subject.id)) {
            throw Error('the subject with this ID does not exist');
        }
        else {
            this.subjects.delete(subject.id);
        }
    }
    readAll() {
        return [this.subjects];
    }
    verify(subject) {
        if (this.subjects.has(subject.id)) {
            return true;
        }
        else {
            return false;
        }
    }
}
//# sourceMappingURL=lmsmodel.js.map