var expect = require('chai').expect
var Person = require('../src/demo5').Person
var Teacher = require('../src/demo5').Teacher

describe('Demo 5', function(){

    var brandon = new Person({name:'brandon',age:25})
    var robin = new Teacher({name:'robin',age:26, studentCount:50})

    it('creates an object with name',function(){
        expect(brandon.name).to.be.equal('brandon')
        expect(robin.name).to.be.equal('robin')
    })

    it('creates an object with function getAge', function(){
        expect(brandon.getAge()).to.be.equal(25)
        expect(robin.getAge()).to.be.equal(26)
    })

    it('creates an object with function setAge', function(){
        brandon.setAge(35)
        robin.setAge(36)
        expect(brandon.getAge()).to.be.equal(35)
        expect(robin.getAge()).to.be.equal(36)
    })

    it('creates class Teacher with function setStudentCount',function(){
        expect(robin.getStudentCount()).to.be.equal(50)
    })

    it('creates class Teacher with function setStudentCount',function(){
        robin.setStudentCount(60)
        expect(robin.getStudentCount()).to.be.equal(60)
    })

    it('prototype validation should match parents', function(){
        expect(robin.__proto__).to.be.equal(Teacher.prototype)
        expect(robin.__proto__.__proto__).to.be.equal(Person.prototype)
        expect(robin).to.be.an.instanceof(Teacher)
        expect(robin).to.be.an.instanceof(Person)
    })


})
