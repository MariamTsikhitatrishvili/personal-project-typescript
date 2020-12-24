export class SubjectsModel {
    constructor(subjects) {
        this.title = subjects.title;
        this.lessons = subjects.lessons;
        this.description = subjects.description;
        this.id = Math.floor(Math.random() * 1000);
    }
}
//# sourceMappingURL=subjectsmodel.js.map