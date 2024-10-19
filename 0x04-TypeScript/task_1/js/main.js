"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentClass = void 0;
exports.printTeacher = printTeacher;
exports.createStudent = createStudent;
function printTeacher(firstName, lastName) {
    return `${firstName[0]}. ${lastName}`;
}
class StudentClass {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    workOnHomework() {
        return 'Currently working';
    }
    displayName() {
        return this._firstName;
    }
}
exports.StudentClass = StudentClass;
function createStudent(ctor, firstName, lastName) {
    return new ctor(firstName, lastName);
}
