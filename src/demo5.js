function Person(props){
    this.name = props?(props.name||'brandon'):'brandon'
    var age = props?(props.age||26):26

    this.setAge = function(_age){
        age = _age
    }
    this.getAge = function(){
        return age
    }
}

function Teacher(props){
    Person.call(this, props)
    var studentCount = props?(props.studentCount||55):55

    this.setStudentCount = function(_count){
        studentCount = _count
    }
    this.getStudentCount = function(){
        return studentCount
    }
}

function inherits(Child,Parent){
    var F = function(){}
    F.prototype =Parent.prototype
    Child.prototype = new F()
    Child.prototype.constructor = Child
}

inherits(Teacher, Person)

function Man(){
    var sex = 'male'

    this.setSex = function(_sex){
        sex = _sex
    }

    this.getSex = function(){
        return sex
    }
}

function Student(){
    Person.call(this)
    Man.call(this)
}

for(var i in Person.prototype){
    Student.prototype[i] = Person.prototype[i]
}
for(var i in Man.prototype){
    Student.prototype[i] = Man.prototype[i]
}


exports.Person = Person
exports.Teacher = Teacher
exports.Student = Student
exports.Man = Man
