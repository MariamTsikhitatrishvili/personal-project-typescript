"use strict";
exports.__esModule = true;
var index_1 = require("./school/index");
var index_2 = require("./school/index");
var index_3 = require("./school/index");
var index_4 = require("./school/index");
var index_5 = require("./school/index");
var index_6 = require("./school/index");
// --------------------------  SubjectModel And LMSModel ---------------------------
var history = new index_1.SubjectsModel({
    title: 'History',
    lessons: 24,
    description: 'My desc'
});
var geography = new index_1.SubjectsModel({
    title: 'geo',
    lessons: 12,
    description: 'My desc'
});
// console.log(geography.id);
// console.log(history);
var lms = new index_2.LMSModel();
lms.add(history);
lms.add(geography);
lms.remove(history);
// console.log(lms.readAll());
// console.log(lms.verify(history));
// -------------------- TeachersModel $$--------------------------------
var data = {
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
    "sex": 'male',
    "subjects": [
        {
            "subject": "string"
        }
    ],
    "description": "string"
};
var updatedProfile = {
    "name": {
        "first": "ლიზა",
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
    "sex": 'male',
    "subjects": [
        {
            "subject": "string"
        }
    ],
    "description": "string"
};
var teachers = new index_3.TeachersModel();
var teacherId = teachers.add(data);
var updateTeacher = teachers.update(teacherId, updatedProfile);
console.log(teachers.read(teacherId));
teachers.remove(teacherId);
console.log(teacherId);
// // ------------------------------PupilsModule---------------------------
var pupilData = {
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
    "sex": 'male',
    "description": "string"
};
var updatePupilData = {
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
    "sex": 'female',
    "description": "string"
};
var pupils = new index_4.PupilsModel();
var pupil = pupils.add(pupilData);
console.log(pupil.id);
pupils.update(pupil.id, updatePupilData);
console.log(pupils.read(pupil.id));
pupils.remove(pupil.id);
//     -----------------------------GroupModule---------------------------------
console.log('-------------------------');
var room = 236;
var groups = new index_5.GroupsModel();
var groupId = groups.add(room);
console.log(groupId);
console.log(groups.addPupil(groupId, pupil));
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
var pupilId = pupil.id;
var teachersId = teacherId;
var gradebooks = new index_6.GradeBooksModel(groups, teachers, lms);
var level = 2;
var gradebook = gradebooks.add(level, groupId);
console.log(gradebook);
var record = {
    pupilId: pupilId,
    teacherId: teachersId,
    subjectId: history.id,
    lesson: 3,
    mark: 10
};
console.log(gradebooks.addRecord(gradebook, record));
var oliver = gradebooks.read(gradebook, pupilId);
console.log(oliver);
var students = gradebooks.readAll(gradebook); // It will return the array of objects
console.log(students);
