import { SubjectsModel } from './school/index';
import { LMSModel } from './school/index';
import { TeachersModel } from './school/index';
import { PupilsModel } from './school/index';
import { GroupsModel } from './school/index';
// import {GradeBooksModel} from './school/index';
// --------------------------  SubjectModel And LMSModel ---------------------------
const history = new SubjectsModel({
    title: 'History',
    lessons: 24,
    description: 'My desc'
});
const geography = new SubjectsModel({
    title: 'geo',
    lessons: 12,
    description: 'My desc'
});
// console.log(geography.id);
// console.log(history);
const lms = new LMSModel();
lms.add(history);
lms.add(geography);
lms.remove(history);
// console.log(lms.readAll());
// console.log(lms.verify(history));
// -------------------- TeachersModel $$--------------------------------
let data = {
    "name": {
        "first": "mariam",
        "last": "tsikhitatrishvili"
    },
    "image": "string",
    "dateOfBirth": "12.05.2020",
    "emails": [
        {
            "email": "some",
            "primary": true
        }
    ],
    "phones": [
        {
            "phone": "string",
            "primary": false
        }
    ],
    "sex": "male",
    "subjects": [
        {
            "subject": "string"
        }
    ],
    "description": "string"
};
let updatedProfile = {
    "name": {
        "first": "მარო",
        "last": "asf"
    },
    "image": "string",
    "dateOfBirth": "24.10.1999",
    "emails": [
        {
            "email": "some",
            "primary": true
        }
    ],
    "phones": [
        {
            "phone": "string",
            "primary": false
        }
    ],
    "sex": "male",
    "subjects": [
        {
            "subject": "string"
        }
    ],
    "description": "string",
};
const teachers = new TeachersModel();
const teacherId = teachers.add(data);
const updateTeacher = teachers.update(teacherId, updatedProfile);
// console.log(teachers.read(teacherId));
teachers.remove(teacherId);
// console.log(teacherId);
// // ------------------------------PupilsModule---------------------------
let pupilData = {
    "name": {
        "first": "mariam",
        "last": "tsikhitatrishvili"
    },
    "image": "string",
    "dateOfBirth": "24.10.1999",
    "phones": [
        {
            "phone": "string",
            "primary": true
        }
    ],
    "sex": "male",
    "description": "string"
};
let updatePupilData = {
    "name": {
        "first": "mariam",
        "last": "beridze"
    },
    "image": "string",
    "dateOfBirth": "10.25.1999",
    "phones": [
        {
            "phone": "string",
            "primary": true
        }
    ],
    "sex": "female",
    "description": "string"
};
const pupils = new PupilsModel();
const pupil = pupils.add(pupilData);
console.log(pupil.id);
pupils.update(pupil.id, updatePupilData);
console.log(pupils.read(pupil.id));
pupils.remove(pupil.id);
//     -----------------------------GroupModule---------------------------------
console.log('-------------------------');
const room = 236;
const groups = new GroupsModel();
const groupId = groups.add(room);
console.log(groupId);
// console.log(groups.addPupil(groupId, pupil));
console.log(groups.readAll());
groups.update(groupId, {
    room: 237
});
console.log('-------------------------');
console.log(groups.read(groupId));
console.log('-------------------------');
console.log(groups.readAll());
// groups.removePupil(groupId, pupil.id);
console.log(groups.readAll());
console.log('-------------------------');
// //--------------------------------- $$Gradebook$$ ----------------------------------
// const pupilId = pupil.id;
// const teachersId = teacherId;
// const gradebooks = new GradeBooksModel(groups, teachers, lms);
// const level = 2;
// const gradebook = gradebooks.add(level, groupId);
// console.log(gradebook);
// const record = {
//   pupilId: pupilId,
//   teacherId: teachersId,
//   subjectId: history.id,
//   lesson: 3,
//   mark: 10
// };
// console.log(gradebooks.addRecord(gradebook, record));
// const oliver = gradebooks.read(gradebook, pupilId);
// console.log(oliver);
// const students = gradebooks.readAll(gradebook); // It will return the array of objects
// console.log(students);
//# sourceMappingURL=main.js.map