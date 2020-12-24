interface lmsschema {
    id: number;
}
export class LMSModel{
    protected subjects: Map<any, any>;
    constructor(){
        this.subjects = new Map();
    }
    add (subject: lmsschema) : boolean{

            this.subjects.set(subject.id, subject);
            return true;
    }
    remove (subject:{ id: number; }): void{
  
        if (!this.subjects.has(subject.id)) {
            throw Error('the subject with this ID does not exist')
        }
        else { 
            this.subjects.delete(subject.id);
        }
     }
     readAll() : object[]{

        return [this.subjects]
    }
     verify(subject: {id: number;}): boolean{
         if (this.subjects.has(subject.id)){
             return true;
         }
         else {
             return false;
         }
     }

}
