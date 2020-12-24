// import { Validator } from "./validator";
interface Subjectsschema {
    title: string,
    lessons: number,
    description?: string
}
export class SubjectsModel {
    title: string;
    lessons: number;
    description? : string;
    id: number;
  constructor(subjects:Subjectsschema ) {
    this.title = subjects.title;
    this.lessons = subjects.lessons;
    this.description = subjects.description;
    this.id = Math.floor(Math.random() * 1000);
    
  }
}
