import { GroupsModel } from './groupsmodel';
import { TeachersModel } from './teachersmodel';
import { LMSModel } from './lmsmodel';
interface grade {
    level: number;
    id: number;
    records: recordsSchema[];
}

interface recordsSchema {
    pupilId?: number,
    teacherId: number,
    subjectId: number,
    lesson: number,
    mark: number
}

export class GradeBooksModel {
    protected grades: Map<number, grade>
    groups: GroupsModel;
    teachers: TeachersModel;
    lms: LMSModel;

    constructor(groups: GroupsModel, teachers: TeachersModel, lms: LMSModel) {
        this.grades = new Map();
        this.groups = groups;
        this.teachers = teachers;
        this.lms = lms;
    }

    add(level: number, gradeid: string) {

        let id = Math.floor(Math.random() * 1000);
        this.grades.set(id, { level, id, records: [] })
        return id;

    }
    clear(): void {
       this.grades.clear();
    }

    addRecord(gradebookId: number, record: recordsSchema) {
        const grade = this.grades.get(gradebookId);
        if (grade) {
            grade.records.push(record);
            return this.grades;
        }
        else {
            throw new Error('Something went wrong')
        }
    }

    read(gradebookId: number, pupilId: number) {
        return this.grades;
    }

    readAll(gradebookId: number) {
       
        return Array.from(this.grades);
    }
}