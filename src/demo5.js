function Person(props){
  if(props){
    this.name = props.name||"brandon";
    var age = props.age||26;
  }else{
    this.name = "brandon";
    var age = 26;
  }

  this.setAge = function(_age){
    age = _age;
  }
  this.getAge = function(){
    return age;
  }
}

function Teacher(props){
  Person.call(this, props);
  if(props){
    var studentCount = props.studentCount||55;
  }else{
    var studentCount = 55;
  }

  this.setStudentCount = function(_count){
    studentCount = _count;
  }
  this.getStudentCount = function(){
    return studentCount;
  }
}


function F(){
}

F.prototype = Person.prototype;
Teacher.prototype = new F();
Teacher.prototype.constructor = Teacher;

exports.Person = Person;
exports.Teacher = Teacher;
