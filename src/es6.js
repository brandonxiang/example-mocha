class Person {

    constructor(){
        this.name = 'brandon'
        this._age = 26;
    }

    setAge(_a){
        this._age = _a;
    }

    getAge(){
        return this._age;
    }
}

class Teacher extends Person {
    constructor(){
        super()
        this._studentCount = 55
    }

    setStudentCount(_b){
        this._studentCount = _b
    }

    getStudentCount(){
        return this._studentCount
    }
}