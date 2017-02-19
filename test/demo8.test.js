var sumString = require('../src/demo8.js')
var expect = require('chai').expect

describe('Demo 8', function(){
    var a = '111111111'
    var b = '22222222'
    var c = '133333333'

    it('sums up two small string', function(){
        expect(sumString(a,b)).to.be.equal(c)
    })
})
