"use strict";
var Subjects;
(function (Subjects) {
    class Subject {
        set setTeacher(teacher) {
            this.teacher = teacher;
        }
    }
    Subjects.Subject = Subject;
})(Subjects || (Subjects = {}));
