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

exports.Person = Person
exports.Teacher = Teacher
