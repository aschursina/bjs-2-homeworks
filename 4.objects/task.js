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
  if (this.hasOwnProperty('marks')) {
      this.marks.push(...addMark);
   } 
}

 Student.prototype.getAverage = function () {
  if (this.hasOwnProperty('marks') === false || this.marks.length < 1) {
    return 0;
  } 
  return result = this.marks.reduce((acc, item, index, arr) => {
    acc+=item;
    if (index === arr.length - 1) {
        return acc / arr.length;
       }
       return acc;
  }, 0) ;
} 

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
    this.excluded = reason;
}
