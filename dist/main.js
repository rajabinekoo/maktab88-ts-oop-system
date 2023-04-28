"use strict";
class StudentBase {
}
class Student extends StudentBase {
    constructor(studentId, nationalId, scoreAverage, marriage) {
        super();
        this.studentId = studentId;
        this.nationalId = nationalId;
        this.scoreAverage = scoreAverage;
        this.marriage = marriage;
        this.license = "No license";
    }
    static sayHello() {
        console.log("hello world");
    }
    printLicense() {
        return this.license;
    }
    validation(_) {
        return false;
    }
    setLicense(newLicense) {
        if (this.validation(newLicense))
            this.license = newLicense;
    }
}
class StudentOverrides extends Student {
    constructor() {
        super(...arguments);
        this.validationParam = "";
    }
    validation(_) {
        return this.validationParam === _;
    }
}
class MaktabStudent extends StudentOverrides {
    constructor(graduated, course, hasJob, position, studentId, nationalId, scoreAverage, marriage) {
        super(studentId, nationalId, scoreAverage, marriage);
        this.graduated = graduated;
        this.course = course;
        this.hasJob = hasJob;
        this.position = position;
        this.validationParam = "Maktab Sharif";
    }
    printMarriageState() {
        console.log(this.marriage);
    }
}
class ComputerScience extends StudentOverrides {
    constructor(graduated, studentId, nationalId, scoreAverage, marriage) {
        super(studentId, nationalId, scoreAverage, marriage);
        this.graduated = graduated;
        this.validationParam = "Computer Sciense";
    }
}
const student3 = new MaktabStudent(false, "Nodejs", false, "Back-end", 2, 1234567890, 20, false);
// student3.printMarriageState();
// console.log(student3);
// Student.sayHello();
const student4 = new ComputerScience(false, 2, 1234567890, 20, false);
// with class
// const licenseSetting2 = (person: Student, license: string): void => {
//   person.setLicense(license);
//   console.log(person.printLicense());
// };
const licenseSetting = (person) => {
    person.setLicense(person instanceof MaktabStudent
        ? "Maktab Sharif"
        : person instanceof ComputerScience
            ? "Computer Sciense"
            : "No license");
    console.log(person.printLicense());
};
licenseSetting(student3);
licenseSetting(student4);
licenseSetting(new Student(3, 123456789, 12, false));
class ClassA {
    constructor() {
        this.className = "";
        this.className2 = "";
        this.className3 = "";
        this.className4 = "";
    }
    setClassName(v) {
        this.className = v;
    }
}
class ClassB {
    constructor() {
        this.className = "";
    }
    setClassName(v) {
        this.className = v;
    }
    sayHello() {
        console.log("hello");
    }
}
const setNewClassName = (target) => {
    target.setClassName(target instanceof ClassA ? "ClassA" : "ClassB");
    console.log(target.className);
};
setNewClassName(new ClassA());
setNewClassName(new ClassB());
