import { Validator } from "./validator";
interface phone {
    phone: string,
    primary: boolean
}

interface PupilSchema {
    id?: number;
    name: {
        first: string,
        last: string
      },
      image: string,
      dateOfBirth: string, // format date
      phones: phone[],
      sex: string, // male OR female
      description?: string
}
interface groupsSchema {
    id : string,
    room: number,
    pupils: PupilSchema[]
}


    export class GroupsModel{
        groups: Map<string, groupsSchema>;
        constructor(){
            this.groups = new Map();

        }

        add(room: number){
                let id =Math.random().toString(36).substr(2, 8);
                this.groups.set(id, {id,room,pupils: [] });
                return id;
        
        }
    addPupil(groupId: string, pupil: PupilSchema) {
      if(this.groups.has(groupId)){
          let group = this.groups.get(groupId);
          group.pupils.push(pupil)
          return pupil;
      }
      else {
          throw new Error("there is no such group")
      }
    }
    removePupil(groupId: string, pupilid: number) {
        if(this.groups.has(groupId)){
            this.groups.delete(groupId);
        }
        else{
            throw new Error('there is no such group')
        }
    }
    update(groupId: string, updated: {room: number}) {
        if(this.groups.has(groupId)){
            const group = this.groups.get(groupId);
            group.room = updated.room;
        }
        else {
            throw new Error("There is no such group")
        }
    }
    read(groupId: string) {
      if (this.groups.has(groupId)){
          return this.groups;
      }
      else{
          throw new Error ('there is no such group');
      }
    }
    readAll() {
        if (arguments.length > 0) {
            throw new Error("readall must't have parameter");
        } else {
            return Array.from(this.groups);
        }
    }
  }
  