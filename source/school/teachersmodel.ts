import {Validator} from  './validator';
interface emails {
    email: string,
    primary: boolean
}

interface phones {
    phone: string,
    primary: boolean
}

interface subjects {
    subject: string
}

interface Teacherschema {
    id? :number,
    name: {
        first: string,
        last: string
    },
    image: string,
    dateOfBirth: string,
    emails: emails[],
    phones: phones[],
    sex: string,
    subjects: subjects[],
    description?: string,
}
export class TeachersModel{
    teachers: Map<number, Teacherschema>;
    id: number
    constructor(){
        this.teachers = new Map();
        this.id = Math.floor(Math.random() * 100000000)

    }
    add(teacher: Teacherschema): number{
        Validator.validator(teacher);
        let id = Math.floor(Math.random() * 1000);
        teacher.id = id;
        this.teachers.set(id,teacher);
        return id;
    }
 
    read(teacherId: number): object{
        if(!this.teachers.has(teacherId)){
            throw new Error ('there is no such teacher');
       } 
       else {
        let teach = this.teachers.get(teacherId);
        return  {
            teacherId,
            ...teach
        };
       }
    }
    remove(teacherId: number): void{
        if (!this.teachers.has(teacherId)) {
            throw Error('the teacher with this ID does not exist')
        }
        else { 
            this.teachers.delete(teacherId);
        }
    }
    update(teacherId, updatedProfile): number{
        Validator.validator(updatedProfile)
            let teach: Teacherschema= this.teachers.get(teacherId);
  
            Object.assign(teach, updatedProfile);
            return teacherId;
    }
}
