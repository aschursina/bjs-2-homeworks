function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

let student = new Student("Василиса", "женский", 19);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...addMark) {
  if (student.hasOwnProperty('marks') == true) {
      this.marks.push(...addMark);
      return addMark;
   } else { 
    return 0;
   }
}

 Student.prototype.getAverage = function () {
  if (student.hasOwnProperty('marks') == false || student.marks == []) {
    return 0;
  } else {
    let result = this.marks.reduce((acc, item, index, arr) => {
        acc+=item;
        if (index === arr.length - 1) {
        return acc / arr.length;
        }
        return acc;
    }, 0) ;
    return result;
  }
} 

Student.prototype.exclude = function (reason) {
    delete this.marks;
    delete this.subject;
    this.excluded = reason;
}
