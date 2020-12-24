import { Validator } from './validator';
export class TeachersModel {
    constructor() {
        this.teachers = new Map();
        this.id = Math.floor(Math.random() * 100000000);
    }
    add(teacher) {
        Validator.validator(teacher);
        let id = Math.floor(Math.random() * 1000);
        teacher.id = id;
        this.teachers.set(id, teacher);
        return id;
    }
    read(teacherId) {
        if (!this.teachers.has(teacherId)) {
            throw new Error('there is no such teacher');
        }
        else {
            let teach = this.teachers.get(teacherId);
            return Object.assign({ teacherId }, teach);
        }
    }
    remove(teacherId) {
        if (!this.teachers.has(teacherId)) {
            throw Error('the teacher with this ID does not exist');
        }
        else {
            this.teachers.delete(teacherId);
        }
    }
    update(teacherId, updatedProfile) {
        Validator.validator(updatedProfile);
        let teach = this.teachers.get(teacherId);
        Object.assign(teach, updatedProfile);
        return teacherId;
    }
}
//# sourceMappingURL=teachersmodel.js.map