interface StudentInterface {
  license: string;
  printLicense(): string;
  setLicense(_: string): void;
}

abstract class StudentBase {
  abstract validation(_: string): boolean;
}

class Student extends StudentBase implements StudentInterface {
  license: string = "No license";

  constructor(
    public studentId: number,
    private nationalId: number,
    public scoreAverage: number,
    protected marriage: boolean
  ) {
    super();
  }

  static sayHello() {
    console.log("hello world");
  }

  printLicense(): string {
    return this.license;
  }

  override validation(_: string): boolean {
    return false;
  }

  setLicense(newLicense: string): void {
    if (this.validation(newLicense)) this.license = newLicense;
  }
}

class StudentOverrides extends Student {
  protected validationParam = "";

  override validation(_: string): boolean {
    return this.validationParam === _;
  }
}

class MaktabStudent extends StudentOverrides {
  constructor(
    public graduated: boolean,
    public course: string,
    public hasJob: boolean,
    public position: string,
    studentId: number,
    nationalId: number,
    scoreAverage: number,
    marriage: boolean
  ) {
    super(studentId, nationalId, scoreAverage, marriage);
    this.validationParam = "Maktab Sharif";
  }

  printMarriageState() {
    console.log(this.marriage);
  }

  //   error
  //   printNationalId() {
  //     console.log(this.nationalId);
  //   }
}

class ComputerScience extends StudentOverrides {
  constructor(
    public graduated: boolean,
    studentId: number,
    nationalId: number,
    scoreAverage: number,
    marriage: boolean
  ) {
    super(studentId, nationalId, scoreAverage, marriage);
    this.validationParam = "Computer Sciense";
  }
}

const student3: MaktabStudent = new MaktabStudent(
  false,
  "Nodejs",
  false,
  "Back-end",
  2,
  1234567890,
  20,
  false
);

// student3.printMarriageState();

// console.log(student3);
// Student.sayHello();

const student4: ComputerScience = new ComputerScience(
  false,
  2,
  1234567890,
  20,
  false
);

// with class
// const licenseSetting2 = (person: Student, license: string): void => {
//   person.setLicense(license);
//   console.log(person.printLicense());
// };

const licenseSetting = (person: StudentInterface): void => {
  person.setLicense(
    person instanceof MaktabStudent
      ? "Maktab Sharif"
      : person instanceof ComputerScience
      ? "Computer Sciense"
      : "No license"
  );
  console.log(person.printLicense());
};

licenseSetting(student3);
licenseSetting(student4);
licenseSetting(new Student(3, 123456789, 12, false));

interface ClassInterface {
  className: string;
  setClassName: (_: string) => void;
}

class ClassA implements ClassInterface {
  public className: string = "";
  public className2: string = "";
  public className3: string = "";
  public className4: string = "";

  public setClassName(v: string) {
    this.className = v;
  }
}

class ClassB implements ClassInterface {
  public className: string = "";

  public setClassName(v: string) {
    this.className = v;
  }

  public sayHello() {
    console.log("hello");
  }
}

const setNewClassName = (target: ClassInterface) => {
  target.setClassName(target instanceof ClassA ? "ClassA" : "ClassB");
  console.log(target.className);
};

setNewClassName(new ClassA());
setNewClassName(new ClassB());
