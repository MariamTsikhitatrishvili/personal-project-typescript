import { Validator } from './validator';
;
export class PupilsModel {
    constructor() {
        this.pupils = new Map();
        this.id = Math.floor(Math.random() * 100000000);
    }
    add(pupil) {
        Validator.validator(pupil);
        let id = Math.floor(Math.random() * 1000);
        pupil.id = id;
        this.pupils.set(id, pupil);
        return this.pupils.get(id);
    }
    read(pupilid) {
        if (!this.pupils.has(pupilid)) {
            throw new Error('there is no such pupil');
        }
        else {
            return this.pupils.get(pupilid);
        }
    }
    update(pupilid, updatedProfile) {
        Validator.validator(updatedProfile);
        let pupil = this.pupils.get(pupilid);
        Object.assign(pupil, updatedProfile);
    }
    remove(pupilid) {
        if (!this.pupils.has(pupilid)) {
            throw Error('the pupil with this ID does not exist');
        }
        else {
            this.pupils.delete(pupilid);
        }
    }
}
//# sourceMappingURL=pupilsmodel.js.map