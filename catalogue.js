class School {
    constructor(name, level, numberOfStudents) {
      (this._name = name),
        (this._level = level),
        (this._numberOfStudents = numberOfStudents);
    }
    get name() {
      return this._name;
    }
    get level() {
      return this._level;
    }
    get numberOfStudents() {
      return this._numberOfStudents;
    } //end getters
    set numberOfStudents(num) {
      if (num !== "number") {
        console.log("Invalid input: Number of Students must be set to a Number");
      } else {
        this._numberOfStudents = num;
      }
    }
    set name(newName) {
      this._name = newName;
    } //end setters
    quickFacts() {
      const random = Math.floor(Math.random() * 5);
      switch (random) {
        case 0:
          return `${this._name} educates ${this._numberOfStudents} students at the ${this._level} School level.`;
          break;
        case 1:
          return `Javascript is the first programming language i have learned in ${this._level} at ${this._name}.`;
          break;
        case 2:
          return "I love Programming";
          break;
        case 3:
          return "I dont know what i am doing but i am doing great";
          break;
        case 4:
          return "I can do it, trust the process";
          break;
        default:
          return "Error there is a problem in the input";
          break;
      }
    }
    static pickSubstituteTeacher(substituteTeachers) {
      const random = Math.floor(Math.random() * 6);
      return (this._name = substituteTeachers[random]);
    }
  }
  //ends school
  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickUpPolicy) {
      super(name, "primary", numberOfStudents);
      this._pickUpPolicy = pickUpPolicy;
    }
    get pickUpPolicy() {
      return this._pickUpPolicy;
    }
  }
  //ends primaryschool
  class MiddleSchool extends School {
    constructor(name, numberOfStudents) {
      super(name, "middleSchool", numberOfStudents);
    }
  }
  //ends middleschool
  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeam) {
      super(name, "highSchool", numberOfStudents);
      this._sportsTeam = sportsTeam;
    }
    get sportsTeam() {
      return this._sportsTeam;
    }
  }
  const teachers = [
    "Jamal Crawford",
    "Lou Williams",
    "J. R. Smith",
    "James Harden",
    "Jason Terry",
    "Manu Ginobli",
  ];
  const newteacher = School.pickSubstituteTeacher(teachers);
  
  //instances of primary and higschool
  const lorraineHansbury = new PrimarySchool(
    "Lorraine Hunsbury",
    514,
    "Students must be picked up by a parent, guardian, or a family member over the age of 13."
  );
  
  const alSmith = new HighSchool("Al E. Smith", 415, [
    "Baseball",
    "Basketball",
    "Volleyball",
    "Track and Field",
  ]);
  
  
  //const logteacher = `Substitute teacher: ${newteacher}`;
  //lorraineHansbury.quickFacts();
  //lorraineHansbury.name = newteacher;
  //console.log(lorraineHansbury);
  //console.log(logteacher);
  