var sumString = require('../src/demo8.js').sumString
var addString = require('../src/demo8.js').addString
var expect = require('chai').expect

describe('Demo 8', function(){
    var a = '111111111'
    var b = '22222222'
    var c = '133333333'

    it('sums up two small string', function(){
        expect(sumString(a,b)).to.be.equal(c)
    })

    it('add up two small string', function(){
      expect(addString(a,b)).to.be.equal(c)
    })
})
