import {Validator} from  './validator';
interface phones {
    phone: string,
    primary: boolean
}

interface pupilsscema {
    id?: number,
    name : {
        first: string,
        last: string
      },
      image: string,
      dateOfBirth: string, // format date
      phones: phones[],
      sex: string, // male OR female
      description?: string
    };

export class PupilsModel{
    protected pupils: Map< number, pupilsscema>;
    id: number;
    constructor(){
        this.pupils = new Map();
        this.id = Math.floor(Math.random() * 100000000)
    }

     add(pupil: pupilsscema){
        Validator.validator(pupil);
        let id = Math.floor(Math.random() * 1000);
        pupil.id = id;
        this.pupils.set(id,pupil);
        return this.pupils.get(id);
     }
     read(pupilid : number): object {
        if(!this.pupils.has(pupilid)){
            throw new Error ('there is no such pupil');
       } 
       else {
        return this.pupils.get(pupilid);
       }
     }
     update(pupilid: number, updatedProfile:pupilsscema ){
             Validator.validator(updatedProfile);
            let pupil = this.pupils.get(pupilid);
  
            Object.assign(pupil, updatedProfile);
    
     }
     remove(pupilid: number){
        if (!this.pupils.has(pupilid)) {
            throw Error('the pupil with this ID does not exist')
        }
        else { 
            this.pupils.delete(pupilid);
        }
     }

}